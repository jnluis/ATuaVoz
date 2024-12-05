import { useState } from "react";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import { IoLogoLinkedin } from "react-icons/io5";
import { teamMembers } from './team';

const Team = () => {
  const [selectedSector, setSelectedSector] = useState("All");

  const sectors = [
    "All",
    ...new Set(teamMembers.map((member) => member.sector)),
  ];

  const filteredMembers =
    selectedSector === "All"
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
              <select
                className="p-2 rounded-md shadow-md focus:outline-none focus:ring"
                onChange={(e) => setSelectedSector(e.target.value)}
                value={selectedSector}
              >
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Grouped Cards */}
            {sectors
              .filter(
                (sector) =>
                  sector === "All" ||
                  filteredMembers.some((member) => member.sector === sector)
              )
              .map((sector) => (
                <div key={sector}>
                  {sector !== "All" && (
                    <h2 className="text-xl font-semibold mb-4">{sector}</h2>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredMembers
                      .filter((member) => member.sector === sector)
                      .map((member) => (
                        <div
                          key={member.name}
                          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                        >
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-lg font-semibold">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {member.position}
                          </p>
                          <p className="text-sm text-gray-600">
                            {member.curso}
                          </p>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 mt-2"
                            >
                              <IoLogoLinkedin />
                            </a>
                          )}
                        </div>
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
