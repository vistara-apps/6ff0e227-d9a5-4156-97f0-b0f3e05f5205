'use client';

import { useState } from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import { View } from '../page';
import { InfoCard } from './InfoCard';
import { LanguageSwitcher } from './LanguageSwitcher';

interface RightsViewProps {
  onNavigate: (view: View) => void;
  location: string;
}

export function RightsView({ onNavigate, location }: RightsViewProps) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const rightsContent = {
    en: {
      title: "Your Rights",
      description: "Every contact you encounter concerns your rights under the law. Our legal help can certainly advise your situation and law enforcement should respect your rights unless a lawful order is made.",
      doTitle: "Do's",
      doContent: [
        "Remain calm and polite",
        "Keep your hands visible",
        "Clearly state 'I am exercising my right to remain silent'",
        "Ask 'Am I free to go?' if detained",
        "Request a lawyer if arrested"
      ],
      dontTitle: "Don'ts", 
      dontContent: [
        "Don't argue or resist physically",
        "Don't consent to searches without a warrant",
        "Don't run or make sudden movements",
        "Don't lie or provide false information",
        "Don't sign anything without a lawyer"
      ]
    },
    es: {
      title: "Sus Derechos",
      description: "Todo contacto que encuentre concierne sus derechos bajo la ley. Nuestra ayuda legal ciertamente puede aconsejar su situación y las fuerzas del orden deben respetar sus derechos a menos que se haga una orden legal.",
      doTitle: "Qué Hacer",
      doContent: [
        "Mantente calmado y cortés",
        "Mantén tus manos visibles",
        "Declara claramente 'Ejerzo mi derecho a permanecer en silencio'",
        "Pregunta '¿Soy libre de irme?' si te detienen",
        "Solicita un abogado si te arrestan"
      ],
      dontTitle: "Qué No Hacer",
      dontContent: [
        "No discutas o resistas físicamente",
        "No consientas a búsquedas sin una orden",
        "No corras o hagas movimientos bruscos",
        "No mientas o proporciones información falsa",
        "No firmes nada sin un abogado"
      ]
    }
  };

  const content = rightsContent[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        
        <LanguageSwitcher
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Location Info */}
      <div className="glass p-4 rounded-lg">
        <div className="flex items-center gap-2 text-accent">
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{location} Law</span>
        </div>
      </div>

      {/* Rights Cards */}
      <div className="space-y-4">
        <InfoCard
          variant="rights"
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4">
          <InfoCard
            variant="script"
            title={content.doTitle}
            description={content.doContent.join(' • ')}
            actionText="Expand +"
          />

          <InfoCard
            variant="legalInfo"
            title={content.dontTitle}
            description={content.dontContent.join(' • ')}
            actionText="Expand +"
          />
        </div>
      </div>

      {/* Communication Scripts */}
      <div className="glass p-4 rounded-lg">
        <h3 className="font-semibold text-textPrimary mb-3">
          {language === 'en' ? 'Common Phrases' : 'Frases Comunes'}
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-textSecondary">
            {language === 'en' 
              ? '"I am exercising my right to remain silent."'
              : '"Ejerzo mi derecho a permanecer en silencio."'
            }
          </p>
          <p className="text-textSecondary">
            {language === 'en'
              ? '"Am I free to go?"'
              : '"¿Soy libre de irme?"'
            }
          </p>
          <p className="text-textSecondary">
            {language === 'en'
              ? '"I do not consent to any searches."'
              : '"No consiento a ninguna búsqueda."'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
