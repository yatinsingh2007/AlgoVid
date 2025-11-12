"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter }  from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  MessageSquare,
  Code2,
  Sparkles,
  Upload,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm animate-in fade-in slide-in-from-bottom-3 duration-1000">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Visualize & Understand DSA Intuitively</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Watch Algorithms Come to Life with{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AlgoVid
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Describe a DSA problem or search any algorithm online — AlgoVid uses AI and the Manim engine
                to generate visual, step-by-step animations that make complex concepts crystal clear.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <Link href="/upload">
                  <Button size="lg" className="gap-2" onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    router.push('/login');
                  }}>
                    <Upload className="h-4 w-4" />
                    Create Visualization
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="#how-it-works">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform the way you learn and understand Data Structures & Algorithms.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Visual Algorithm Animations</h3>
                  <p className="text-sm text-muted-foreground">
                    Watch DSA problems unfold visually through dynamic Manim-powered animations —
                    making concepts easier to grasp and remember.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Query-Based Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Type or paste your own problem statement — AlgoVid will interpret it,
                    generate the code, and build a step-by-step animation of its execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-600 mb-4">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI-Generated Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Get clean, documented, and optimized code for every visualization —
                    bridging theory, visuals, and implementation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Instant Rendering</h3>
                  <p className="text-sm text-muted-foreground">
                    Manim renders your MP4 animations server-side in seconds,
                    so you can focus on learning, not setup.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Verified Logic Flow</h3>
                  <p className="text-sm text-muted-foreground">
                    Each visualization aligns with verified algorithmic logic — ensuring
                    the animations are accurate and educational.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Step-by-Step Playback</h3>
                  <p className="text-sm text-muted-foreground">
                    Control playback speed and focus on each step of the algorithm to truly understand how data evolves in memory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How AlgoVid Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your idea or problem into an interactive algorithm visualization in three steps.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-semibold text-xl mb-2">Describe or Search</h3>
                <p className="text-muted-foreground">
                  Enter your DSA problem statement or choose an existing problem from the database or the internet.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-semibold text-xl mb-2">AI + Manim Visualization</h3>
                <p className="text-muted-foreground">
                  Our backend AI translates the logic into Python Manim code, generating an animated MP4 that visualizes each step.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-semibold text-xl mb-2">Learn Visually</h3>
                <p className="text-muted-foreground">
                  Watch, pause, and replay the animation to deeply understand how the algorithm works and evolves with inputs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}