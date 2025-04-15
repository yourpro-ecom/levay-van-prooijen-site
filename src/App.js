
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Music, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-800">Levay van Prooijen</h1>
        <p className="text-lg text-purple-600">8 jaar oud operazanger 🎵</p>
        <div className="mt-6 flex justify-center">
          <img
            src="/levay-muppet.png"
            alt="Muppet versie van Levay van Prooijen"
            className="rounded-2xl shadow-lg w-60 h-auto"
          />
        </div>
      </header>

      <main className="grid gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Music className="w-6 h-6" /> Over Levay
              </h2>
              <p className="text-gray-700 text-base">
                Levay is een jonge operazanger met een grote stem en een nog grotere droom. Hij zingt al sinds hij 5 jaar oud is en houdt van klassieke muziek, katten, en stroopwafels.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Star className="w-6 h-6" /> Optredens
              </h2>
              <p className="text-gray-700 text-base">
                Levay heeft opgetreden in lokale theaters en op schoolconcerten. Hij werkt nu toe naar een optreden met een echt orkest!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card>
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Neem contact op 🎤
              </h2>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-2 rounded-xl">
                Stuur een berichtje
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
