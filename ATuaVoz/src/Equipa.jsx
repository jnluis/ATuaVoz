import { useState } from "react";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import {
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { IoLogoLinkedin } from "react-icons/io5";
import { teamMembers } from "./team";

const Team = () => {
  const [selectedSector, setSelectedSector] = useState("Todos os setores");

  const sectors = [
    "Todos os setores",
    ...new Set(teamMembers.map((member) => member.sector)),
  ];

  const filteredMembers =
    selectedSector === "Todos os setores"
      ? teamMembers
      : teamMembers.filter((member) => member.sector === selectedSector);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MyNavbar />
        <main className="flex-1 flex flex-col items-center">
          <div className="container mx-auto p-4">
            {/* Filter Button */}
            <div className="mb-6 flex justify-center">
              <Select
                label="Escolher setor"
                className="max-w-xs"
                onChange={(e) => setSelectedSector(e.target.value)}
                selectedKeys={[selectedSector]}
              >
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </Select>
            </div>

            {/* Grouped Cards */}
            {sectors
              .filter(
                (sector) =>
                  sector === "Todos os setores" ||
                  filteredMembers.some((member) => member.sector === sector)
              )
              .map((sector) => (
                <div key={sector} className="mb-6">
                  {sector !== "Todos os setores" && (
                    <h2 className="text-3xl font-semibold mb-4 text-center">{sector}</h2>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredMembers
                      .filter((member) => member.sector === sector)
                      .map((member) => (
                        <Card
                          key={member.name}
                          className="max-w-[300px] mx-auto shadow-2xl"
                        >
                          <CardHeader className="flex-col items-center justify-center">
                            <Image
                              alt={member.name}
                              className="object-cover"
                              src={member.imageUrl}
                            />
                          </CardHeader>
                          <CardBody className="items-center text-center">
                            <div className="flex items-center justify-center gap-2">
                              <h3 className="font-semibold text-lg">
                                {member.name}
                              </h3>
                              {member.linkedin && (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  <IoLogoLinkedin size={20} />
                                </a>
                              )}
                            </div>
                            <p className="text-md font-bold text-default-500">
                              {member.position}
                            </p>
                            <p className="text-sm text-default-500">
                              {member.curso}
                            </p>
                          </CardBody>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
};

export default Team;
