import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  MessageSquare, 
  Code2, 
  Sparkles, 
  Upload, 
  CheckCircle,
  Zap,
  Shield,
  Clock
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm animate-in fade-in slide-in-from-bottom-3 duration-1000">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI-Powered DSA Code Generation</span>
            </div>
            
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              Transform DSA Videos into{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Clean Code
              </span>
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Upload your Data Structures & Algorithms problem videos or paste text queries. 
              AlgoVid analyzes and generates optimized, well-documented code instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Link href="/upload">
                <Button size="lg" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Start Generating
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
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to convert DSA problems into production-ready code
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Video Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Upload DSA problem explanation videos and let AI extract the problem requirements and constraints.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Text Queries</h3>
                <p className="text-sm text-muted-foreground">
                  Paste problem statements or describe algorithms in plain text for instant code generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-600 mb-4">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Clean Code Output</h3>
                <p className="text-sm text-muted-foreground">
                  Get well-structured, commented code with proper naming conventions and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced AI processing delivers results in seconds, not minutes. Start coding immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Optimized Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Receive time and space complexity analysis with optimized algorithm implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Detailed Explanations</h3>
                <p className="text-sm text-muted-foreground">
                  Understand the approach with step-by-step explanations and algorithm breakdowns.
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
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get from problem to solution in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-2">Upload or Type</h3>
              <p className="text-muted-foreground">
                Upload a video of the DSA problem explanation or simply type/paste the problem statement into our text editor.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes the problem, identifies patterns, constraints, and determines the optimal algorithmic approach.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-2">Get Your Code</h3>
              <p className="text-muted-foreground">
                Receive clean, optimized code with detailed explanations, complexity analysis, and test cases ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
            <CardContent className="flex flex-col items-center text-center space-y-6 py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your DSA Learning?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join developers who are accelerating their coding journey with AlgoVid. 
                Start generating optimized code from videos and text today.
              </p>
              <Link href="/upload">
                <Button size="lg" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Start Now - It is Free
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}