import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { AuthScreen } from "./components/AuthScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CategoriesScreen } from "./components/CategoriesScreen";
import { JobRequestsScreen } from "./components/JobRequestsScreen";
import { MessagesScreen } from "./components/MessagesScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { BottomNav } from "./components/BottomNav";
import { ProblemDescriptionScreen } from "./components/ProblemDescriptionScreen";
import { ContractorDiscoveryScreen } from "./components/ContractorDiscoveryScreen";
import { ContractorDetailScreen } from "./components/ContractorDetailScreen";

type Screen = 'welcome' | 'auth' | 'main' | 'problem' | 'discovery' | 'contractor-detail';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleGetStarted = () => {
    setCurrentScreen('auth');
  };

  const handleLogin = () => {
    setCurrentScreen('main');
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentScreen('problem');
  };

  const handleBackToCategories = () => {
    setCurrentScreen('main');
    setActiveTab('categories');
  };

  const handleSubmitProblem = () => {
    setCurrentScreen('discovery');
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
  };

  const handleSelectContractor = () => {
    setCurrentScreen('contractor-detail');
  };

  const handleBackToDiscovery = () => {
    setCurrentScreen('discovery');
  };

  if (currentScreen === 'welcome') {
    return (
      <div className="h-screen w-screen max-w-md mx-auto">
        <WelcomeScreen onGetStarted={handleGetStarted} />
      </div>
    );
  }

  if (currentScreen === 'auth') {
    return (
      <div className="h-screen w-screen max-w-md mx-auto">
        <AuthScreen onLogin={handleLogin} />
      </div>
    );
  }

  if (currentScreen === 'problem') {
    return (
      <div className="h-screen w-screen max-w-md mx-auto">
        <ProblemDescriptionScreen
          categoryId={selectedCategory}
          onBack={handleBackToCategories}
          onSubmit={handleSubmitProblem}
        />
      </div>
    );
  }

  if (currentScreen === 'discovery') {
    return (
      <div className="h-screen w-screen max-w-md mx-auto">
        <ContractorDiscoveryScreen
          onBack={handleBackToMain}
          onSelectContractor={handleSelectContractor}
        />
      </div>
    );
  }

  if (currentScreen === 'contractor-detail') {
    return (
      <div className="h-screen w-screen max-w-md mx-auto">
        <ContractorDetailScreen onBack={handleBackToDiscovery} />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen max-w-md mx-auto relative">
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'categories' && <CategoriesScreen onSelectCategory={handleSelectCategory} />}
      {activeTab === 'jobs' && <JobRequestsScreen />}
      {activeTab === 'messages' && <MessagesScreen />}
      {activeTab === 'profile' && <ProfileScreen />}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}