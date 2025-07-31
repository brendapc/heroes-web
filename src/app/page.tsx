export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      {/* Cursor animado */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      {/* Header Neocities Style */}
      <header className="text-center py-6 bg-gradient-to-r from-pink-300 to-purple-300 border-4 border-purple-500 rounded-lg mx-4 mt-4">
        <div className="animate-bounce">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-2 drop-shadow-lg">
            🐱✨ GATINHOS FOFINHOS ✨🐱
          </h1>
        </div>
        <p className="text-xl text-purple-700 font-bold">
          ~*~ Bem-vindo ao meu site de gatinhos! ~*~
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-2xl animate-spin">🌟</span>
          <span className="text-2xl animate-pulse">💖</span>
          <span className="text-2xl animate-bounce">🎀</span>
          <span className="text-2xl animate-spin">✨</span>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="text-center py-4">
        <div className="bg-white/80 border-2 border-pink-400 rounded-lg mx-4 p-4">
          <div className="flex flex-wrap justify-center gap-4 text-lg font-bold">
            <a
              href="#home"
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              🏠 Home
            </a>
            <a
              href="#gatinhos"
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              😺 Gatinhos
            </a>
            <a
              href="#curiosidades"
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              📚 Curiosidades
            </a>
            <a
              href="#guestbook"
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              📝 Guestbook
            </a>
            <a
              href="#links"
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              🔗 Links
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="bg-white/90 border-4 border-pink-400 rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">
                🎉 Bem-vindo ao meu site de gatinhos! 🎉
              </h2>
              <div className="flex justify-center gap-4 mb-4">
                <span className="text-4xl animate-bounce">😺</span>
                <span className="text-4xl animate-pulse">😸</span>
                <span className="text-4xl animate-bounce">😻</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Este é o lugar mais fofo da internet! Aqui você encontra
                gatinhos adoráveis, curiosidades incríveis e muito amor! 💕
              </p>
              <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-4 rounded-lg border-2 border-pink-300">
                <p className="text-purple-700 font-bold">
                  ⭐ Última atualização: Hoje! ⭐
                </p>
                <p className="text-purple-600">
                  🎵 Música de fundo: &ldquo;Gatinhos Ronronando&rdquo; 🎵
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cat Gallery */}
        <section id="gatinhos" className="mb-8">
          <div className="bg-white/90 border-4 border-purple-400 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
              🐱 Galeria de Gatinhos 🐱
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cat 1 */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 border-3 border-pink-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-bounce">😺</div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  Gatinho Feliz
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho está sempre sorrindo e espalhando alegria! É o
                  mais fofo de todos! 💖
                </p>
                <div className="bg-pink-200 p-2 rounded border-2 border-pink-400">
                  <p className="text-pink-700 font-bold">
                    ❤️ Status: Disponível para adoção!
                  </p>
                </div>
              </div>

              {/* Cat 2 */}
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-3 border-yellow-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-pulse">😸</div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  Gatinho Travesso
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho adora brincar e fazer travessuras fofas! É muito
                  engraçado! 😄
                </p>
                <div className="bg-yellow-200 p-2 rounded border-2 border-yellow-400">
                  <p className="text-yellow-700 font-bold">
                    🎭 Status: Brincando!
                  </p>
                </div>
              </div>

              {/* Cat 3 */}
              <div className="bg-gradient-to-br from-red-100 to-pink-100 border-3 border-red-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-bounce">😻</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  Gatinho Apaixonado
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho tem olhos de coração e ama dar carinho! É muito
                  amoroso! 💕
                </p>
                <div className="bg-red-200 p-2 rounded border-2 border-red-400">
                  <p className="text-red-700 font-bold">
                    💕 Status: Apaixonado!
                  </p>
                </div>
              </div>

              {/* Cat 4 */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-3 border-blue-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-pulse">😽</div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Gatinho Beijoqueiro
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho adora dar beijinhos e fazer carinho! É muito
                  carinhoso! 😘
                </p>
                <div className="bg-blue-200 p-2 rounded border-2 border-blue-400">
                  <p className="text-blue-700 font-bold">
                    😘 Status: Dando beijinhos!
                  </p>
                </div>
              </div>

              {/* Cat 5 */}
              <div className="bg-gradient-to-br from-green-100 to-teal-100 border-3 border-green-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-bounce">😿</div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Gatinho Chorão
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho é sensível e precisa de muito amor! É muito fofo!
                  🥺
                </p>
                <div className="bg-green-200 p-2 rounded border-2 border-green-400">
                  <p className="text-green-700 font-bold">
                    🥺 Status: Precisando de carinho!
                  </p>
                </div>
              </div>

              {/* Cat 6 */}
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 border-3 border-purple-300 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 animate-pulse">🙀</div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  Gatinho Surpreso
                </h3>
                <p className="text-gray-600 mb-3">
                  Este gatinho se surpreende com tudo! É muito engraçado! 😱
                </p>
                <div className="bg-purple-200 p-2 rounded border-2 border-purple-400">
                  <p className="text-purple-700 font-bold">
                    😱 Status: Surpreso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section id="curiosidades" className="mb-8">
          <div className="bg-white/90 border-4 border-blue-400 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
              📚 Curiosidades sobre Gatinhos 📚
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg border-2 border-pink-300">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-pulse">😴</div>
                  <h3 className="font-bold text-purple-700 mb-2">
                    Gatinhos Dormem Muito!
                  </h3>
                  <p className="text-gray-700">
                    Gatinhos dormem em média 16 horas por dia! São verdadeiros
                    especialistas em soneca! 💤
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-300">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-bounce">🎵</div>
                  <h3 className="font-bold text-orange-700 mb-2">
                    Gatinhos Ronronam!
                  </h3>
                  <p className="text-gray-700">
                    O ronronar dos gatinhos tem frequência que ajuda na cura! É
                    muito relaxante! 🎶
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg border-2 border-green-300">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-pulse">👅</div>
                  <h3 className="font-bold text-green-700 mb-2">
                    Língua Especial!
                  </h3>
                  <p className="text-gray-700">
                    A língua dos gatinhos tem pequenos espinhos! Ajudam na
                    limpeza do pelo! 🧽
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-300">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-bounce">🐾</div>
                  <h3 className="font-bold text-blue-700 mb-2">
                    Patas Sensíveis!
                  </h3>
                  <p className="text-gray-700">
                    As patinhas dos gatinhos são muito sensíveis! Têm glândulas
                    de cheiro! 👃
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guestbook Section */}
        <section id="guestbook" className="mb-8">
          <div className="bg-white/90 border-4 border-green-400 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
              📝 Guestbook 📝
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-300">
              <p className="text-center text-green-700 font-bold mb-4">
                Deixe uma mensagem para os gatinhos! 💕
              </p>

              <div className="space-y-4">
                <div className="bg-white p-3 rounded border border-green-300">
                  <p className="text-sm text-gray-600">Por: GatinhoLover123</p>
                  <p className="text-green-700">
                    &ldquo;Os gatinhos são demais! 😺💖&rdquo;
                  </p>
                </div>

                <div className="bg-white p-3 rounded border border-green-300">
                  <p className="text-sm text-gray-600">Por: CatFan99</p>
                  <p className="text-green-700">
                    &ldquo;Site muito fofo! Adorei! 🐱✨&rdquo;
                  </p>
                </div>

                <div className="bg-white p-3 rounded border border-green-300">
                  <p className="text-sm text-gray-600">Por: MeowMaster</p>
                  <p className="text-green-700">
                    &ldquo;Quero adotar todos os gatinhos! 😻&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section id="links" className="mb-8">
          <div className="bg-white/90 border-4 border-purple-400 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
              🔗 Links Fofos 🔗
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg border-2 border-pink-300 text-center">
                <h3 className="font-bold text-purple-700 mb-2">
                  🐱 Meus Amigos
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-purple-600 hover:text-pink-500"
                  >
                    ✨ Site da Luna
                  </a>
                  <a
                    href="#"
                    className="block text-purple-600 hover:text-pink-500"
                  >
                    🌟 Blog do Miau
                  </a>
                  <a
                    href="#"
                    className="block text-purple-600 hover:text-pink-500"
                  >
                    💖 Gatinhos Online
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-300 text-center">
                <h3 className="font-bold text-blue-700 mb-2">🎨 Recursos</h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-cyan-500"
                  >
                    🎭 Emojis de Gatos
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-cyan-500"
                  >
                    🎵 Sons de Ronronar
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-cyan-500"
                  >
                    📸 Fotos Fofas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-r from-pink-300 to-purple-300 border-4 border-purple-500 rounded-lg mx-4 mb-4">
        <p className="text-purple-800 font-bold text-lg mb-2">
          Feito com 💜 e muito amor pelos gatinhos! 🐱✨
        </p>
        <div className="flex justify-center gap-4 mb-2">
          <span className="text-2xl animate-bounce">🐱</span>
          <span className="text-2xl animate-pulse">😺</span>
          <span className="text-2xl animate-bounce">😸</span>
          <span className="text-2xl animate-pulse">😻</span>
          <span className="text-2xl animate-bounce">😽</span>
        </div>
        <p className="text-purple-700">
          ~*~ Visitei em: {new Date().toLocaleDateString()} ~*~
        </p>
        <div className="mt-2">
          <span className="text-sm text-purple-600">
            🌟 Melhor visualizado em 800x600 🌟
          </span>
        </div>
      </footer>
    </div>
  );
}
