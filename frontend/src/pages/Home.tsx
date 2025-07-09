import React from "react";
import {
  Users,
  UserPlus,
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@mui/material";
import { People } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Mordecai
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-700 font-medium">
              Super Efficient User Management System
            </h2>
          </div>
          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <p className="text-lg mb-10 text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mordecai is a comprehensive user management application that
              allows you to efficiently manage user data with features like user
              registration and profile management plus a nice search
              functionality, and more. Built with modern web technologies for
              optimal performance and user experience.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/users"
                startIcon={<People />}
                className="bg-gradient-to-r from-primary-500 to-primary-500 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                View Users
              </Button>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/add-user"
                startIcon={<People />}
                className="bg-gradient-to-r from-primary-500 to-primary-500 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Add New User
              </Button>
              
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="opacity-0 animate-fade-in-up animation-delay-800">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
              Powerful Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-blue-500 mb-6" size={56} />,
                title: "Dashboard Overview",
                description:
                  "Get a comprehensive overview of all users in your system with real-time statistics and analytics.",
                delay: "animation-delay-1000",
              },
              {
                icon: <Users className="text-purple-500 mb-6" size={56} />,
                title: "User Management",
                description:
                  "Efficiently manage user profiles with full CRUD operations and advanced search capabilities.",
                delay: "animation-delay-1200",
              },
              {
                icon: <UserPlus className="text-green-500 mb-6" size={56} />,
                title: "Easy Registration",
                description:
                  "Simple and intuitive user registration form with validation and error handling.",
                delay: "animation-delay-1400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`opacity-0 animate-fade-in-up ${feature.delay}`}
              >
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="opacity-0 animate-fade-in-up animation-delay-1600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <TrendingUp className="text-emerald-500" size={40} />,
                  value: "99.9%",
                  label: "Uptime",
                },
                {
                  icon: <Zap className="text-orange-500" size={40} />,
                  value: "<100ms",
                  label: "Response Time",
                },
                {
                  icon: <Shield className="text-red-500" size={40} />,
                  value: "256-bit",
                  label: "Encryption",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* animasi styling tambahan - semoga diperbolehkan */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-1600 {
          animation-delay: 1.6s;
        }

        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
      `}</style>
    </div>
  );
};

export default Home;
