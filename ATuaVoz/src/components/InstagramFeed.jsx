import { useState, useEffect } from "react";
import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import instagramPosts from "../data/instagramPosts.js";

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(instagramPosts.slice(0, 6));
      setLoading(false);
    }, 300);
  }, []);

  return (
    <section className="w-full px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-3xl text-cyan-400" />
            <h2 className="text-3xl font-bold">Acompanha a nossa campanha</h2>
          </div>
          <a
            href="https://instagram.com/unidos.pela.voz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xl font-semibold"
          >
            @unidos.pela.voz
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-800/50 rounded-lg animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Posts Grid - 1 colunas mobile, 3 colunas desktop */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {posts.map((post) => (
              <InstagramPost key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/unidos.pela.voz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-primary rounded-full font-medium hover:bg-gradient-to-r hover:from-warning hover:to-primary hover:text-white transition-all duration-300"
          >
            Ver mais publicações
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramPost({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer block shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do post */}
      <img
        src={post.image}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Ícone Instagram no canto -- pode-se usar se quisermos incluir vídeos do tiktok no feed
      <div className="absolute top-3 right-3 z-10">
        <FaInstagram className="text-xl text-white drop-shadow-lg" />
      </div> */}

      <div className="absolute top-3 right-3 z-10">
        {post.url && post.url.includes("img_index") && (
          <HiMiniSquare2Stack className="text-3xl text-white drop-shadow-lg" />
        )}
      </div>

      {/* Indicador de vídeo se aplicável */}
      {post.type === "video" && (
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded z-10">
          <span className="text-white text-xs">▶ Vídeo</span>
        </div>
      )}
    </a>
  );
}
