import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
haii sayangkuu, it's yourday 23 Mei 2026, selamat ulang tahun yaa,
tepat pada hari ini umur kamu bertambah satu tahun. semoga rezeki kamu dilancarkan dan segala urusan kamu dimudahkan yaa. semoga kamu sehat-sehat terus, ga gampang capek, dan hati kamu selalu tenang.  
aku berharap semoga kamu bisa menjadi pribadi yang lebih baik ke depannya, tambah dewasa, lebih sabar, dan makin kuat hadapin apapun. makasih udah jadi lelaki yang kuat sampai saat ini. makasih udah bertahan selama ini, padahal kita cuma bisa ketemu lewat layar, chat sama call. aku tau ga gampang ngejalanin hubungan virtual. kdang kngn minta dipelukk gbisaa, tpii kamu tetap di sini, konsisten, dan itu bikin aku ngerasa dihargai dan disayang sma kamuu🫶🏻, sayang aku terus ya, jangan pernah berubah. jaga komitmen kita, meskipun jarak masih misahin kita sekarang. aku percaya klo kita bisa ketemuu klo kmu serius dan effort smaa akuu, aku cuma mau kita tetap sama sama berjuang biar hubungan ini ga cmn virtual ajaa. harapan aku, semoga nanti kita bisa ketemu langsung, bisa ngobrol ga cuma lewat layar, bisa ketawa bareng smbil liat kmu, bisa gandengan tangan beneran. semoga apa yang kita jaga sekarang jadi jalan buat kita ketemu, dan semoga kita bisa kaya gini terus, sampai akhirnya ketemu, maacii udah jadi lelaki yang hebat buat aku. aku mau jadi tujuan dan seseorang yang berarti segalanya buat kamuu, semoga kmu ckup sma akuu yaa. so blessed to have you, love you❤️, bahagia selalu yaa sayangnya akuu, cintanya akuu, aku sayang kamu, hari ini, besok, dan sampai kita ketemu beneran🥰❤️
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Friven Revano💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hatiku hanya untukmu, sayang🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
