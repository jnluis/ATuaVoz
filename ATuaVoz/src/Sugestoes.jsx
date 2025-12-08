import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Textarea,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import { FaPaperPlane } from "react-icons/fa";

const SuggestionPage = () => {
  const [formData, setFormData] = useState({
    category: "",
    suggestion: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationError, setValidationError] = useState("");

  const categories = [
    { key: "Presidência", label: "Presidência" },
    { key: "Política Educativa", label: "Política Educativa" },
    { key: "Cultura", label: "Cultura" },
    { key: "Desporto e Bem Estar", label: "Desporto e Bem Estar" },
    { key: "Comunicação e Imagem", label: "Comunicação e Imagem" },
    { key: "Administração Interna", label: "Administração Interna" },
    { key: "Apoio aos Núcleos", label: "Apoio aos Núcleos" },
    { key: "Aveiro é Nosso", label: "Aveiro é Nosso" },
  ];

  // Auto-hide messages after 5 seconds
  useEffect(() => {
    if (submitStatus || validationError) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setValidationError("");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [submitStatus, validationError]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setValidationError("");
    // Validation: category must be selected and suggestion must not be empty
    if (!formData.category) {
      setValidationError("Por favor, seleciona o setor da sugestão.");
      return;
    }
    if (!formData.suggestion.trim()) {
      setValidationError("Por favor, escreve a tua sugestão.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your Google Form URL (change /viewform to /formResponse)
      const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfYAit6kGURvBqz6-ER9PropZ-dR15orVWIOUphb-halrhohQ/formResponse';
      
      const formDataToSend = new FormData();
      formDataToSend.append('entry.1390290586', formData.category);
      formDataToSend.append('entry.1547926593', formData.suggestion);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Forms requires no-cors mode
        body: formDataToSend,
      });

      // Note: With no-cors mode, we can't check the response status
      // so we assume success if no error is thrown
      setSubmitStatus({
        type: "success",
        message: "Sugestão enviada com sucesso! Obrigado pelo seu feedback.",
      });
      
      // Reset form
      setFormData({
        category: "",
        suggestion: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar sugestão. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MyNavbar />
      <main className="flex-1 flex flex-col items-center py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Queremos ouvir a tua voz!</h1>
            <p className="text-lg text-gray-600">
              A tua opinião é importante para nós! Partilha as tuas ideias,
              sugestões ou feedback.
            </p>
          </div>

          {/* Suggestion Form Card */}
          <Card className="shadow-lg">
            <CardBody className="p-6">
              <div className="flex flex-col gap-6">

                {/* Category Select */}
                <Select
                  label="Setor"
                  placeholder="Seleciona a área da tua sugestão"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  isRequired
                  variant="bordered"
                  classNames={{
                    label: "text-base font-medium",
                  }}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.key} value={category.key}>
                      {category.label}
                    </SelectItem>
                  ))}
                </Select>

                {/* Suggestion Textarea */}
                <Textarea
                  label="Sugestão"
                  placeholder="Escreve aqui a tua ideia ou proposta..."
                  value={formData.suggestion}
                  onValueChange={(value) =>
                    handleInputChange("suggestion", value)
                  }
                  isRequired
                  variant="bordered"
                  minRows={6}
                  classNames={{
                    input: "text-base",
                    label: "text-base font-medium",
                  }}
                />

                {/* Validation Error */}
                {validationError && (
                  <div className="p-4 rounded-lg bg-red-100 text-red-800 border border-red-300">
                    {validationError}
                  </div>
                )}

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  color="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="font-semibold"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? "A enviar..." : "Enviar Sugestão"} <FaPaperPlane />
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>
      <MyFooter />
    </div>
  );
};

export default SuggestionPage;