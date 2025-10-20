"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface CourseCardProps {
  file: string;
  title: string;
  description: string;
  topics: string[];
}

const CourseCard = ({ file, title, description, topics }: CourseCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      {/* Card da Imagem */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg group">
        <Image
          src={`/images/CourseContentSection/${file}`}
          alt={file}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full transition-transform duration-500 group-hover:scale-105"
        />

        <button
          onClick={() => setShowDescription(true)}
          className="absolute whitespace-nowrap min-w-[90px] bottom-6 left-1/2 -translate-x-1/2 bg-white/90 text-[#00134d] font-semibold text-xs sm:text-sm px-6 py-1.5 rounded-full backdrop-blur-md border border-white shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          Ver Mais
        </button>
      </div>

      {/* Modal */}
      {showDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn text-justify">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 animate-slideUp overflow-y-auto max-h-[90vh]">
            {/* Botão fechar */}
            <button
              onClick={() => setShowDescription(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
              <X size={24} />
            </button>

            {/* Conteúdo */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#00134d]">{title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {description}
              </p>

              {topics.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#00134d] mt-4">Tópicos:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animações */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease forwards;
        }
      `}</style>
    </>
  );
};

export default CourseCard;
