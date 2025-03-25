// import React from 'react';
// import { Github, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
// import html2pdf from 'html2pdf.js';

// const App: React.FC = () => {
//   const exportPDF = () => {
//     const element = document.getElementById('cv-content');
//     const opt = {
//       margin: [0, 0, 0, 0],
//       filename: 'CV_Leyane_Louiset.pdf',
//       image: { type: 'jpeg', quality: 1 },
//       html2canvas: {
//         scale: 2,
//         useCORS: true,
//         scrollY: 0,
//         windowWidth: 794,
//         windowHeight: 1123
//       },
//       jsPDF: {
//         unit: 'px',
//         format: [794, 1123],
//         orientation: 'portrait',
//         hotfixes: ["px_scaling"]
//       }
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   const bulletStyle = {
//     position: 'absolute',
//     left: '0',
//     top: '5px',
//     width: '3px',
//     height: '3px',
//     backgroundColor: '#3B82F6',
//     borderRadius: '50%'
//   };

//   const listItemStyle = {
//     position: 'relative',
//     paddingLeft: '10px',
//     marginBottom: '6px',
//     lineHeight: '14px'
//   };

//   return (
//     <div>
//       <button 
//         onClick={exportPDF}
//         className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow"
//       >
//         Télécharger en PDF
//       </button>
      
//       <div id="cv-content" className="w-[210mm] h-[297mm] mx-auto bg-white" style={{ maxHeight: '297mm' }}>
//         <div className="p-6">
//           <header className="mb-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-2xl font-bold mb-1 text-gray-900">Leyane Louiset</h1>
//                 <h2 className="text-lg text-gray-600 mb-1">Développeur full-stack junior</h2>
//                 <p className="text-sm text-gray-600 mb-0.5">Étudiante à Ada Tech School - Formation en développement Full-stack</p>
//                 <p className="text-sm text-gray-600">Future développeuse</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-bold text-sm bg-blue-100 p-2 rounded-lg text-gray-800">
//                   En recherche d'alternance en septembre 2025 en Île de France
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex flex-wrap gap-2 mt-2">
//               <a href="mailto:louisetleyane3@gmail.com" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
//                 <Mail size={12} /> louisetleyane3@gmail.com
//               </a>
//               <a href="tel:+33636838579" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
//                 <Phone size={12} /> 06 36 83 85 79
//               </a>
//               <span className="flex items-center gap-1 text-xs text-gray-600">
//                 <MapPin size={12} /> 94000
//               </span>
//               <a href="https://github.com/Leyanelouiset" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600"
//                 target="_blank" rel="noopener noreferrer">
//                 <Github size={12} /> GitHub
//               </a>
//               <a href="https://www.linkedin.com/in/leyane-louiset" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600"
//                 target="_blank" rel="noopener noreferrer">
//                 <Linkedin size={12} /> LinkedIn
//               </a>
//             </div>

//             <div className="mt-2 p-2 bg-gray-50 rounded-lg">
//               <h3 className="font-semibold mb-1 text-xs text-gray-900">Détails de l'alternance recherchée :</h3>
//               <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
//                 <div>
//                   <p>Type : Contrat d'apprentissage</p>
//                   <p>Durée : 24 mois</p>
//                 </div>
//                 <div>
//                   <p>Disponibilité : Septembre 2025</p>
//                   <p>Rythme : 4j entreprise / 1j école</p>
//                 </div>
//               </div>
//             </div>
//           </header>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b pb-1 text-gray-900">Compétences</h2>
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">FRONT-END</h3>
//                 <div style={{ position: 'relative' }}>
//                   {['HTML', 'CSS', 'JavaScript'].map((skill) => (
//                     <div key={skill} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span style={{ display: 'block' }} className="text-xs text-gray-700">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">BACK-END</h3>
//                 <div className="flex flex-col">
//                   {['SQL', 'PHP'].map((skill) => (
//                     <div key={skill} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-700">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">LANGUES</h3>
//                 <div className="flex flex-col">
//                   {['Français', 'Espagnol', 'Anglais'].map((language) => (
//                     <div key={language} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-700">{language}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b pb-1 text-gray-900">Éducation</h2>
//             <div className="space-y-2">
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Ada tech school</h3>
//                   <span className="text-xs text-gray-600">2024-2026</span>
//                 </div>
//                 <p className="font-medium text-xs text-gray-700">Concepteur développeur d'application</p>
//                 <p className="text-xs text-gray-600">Préparation du titre RNCP de niveau VI (Bac+3)</p>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Baccalauréat STMG</h3>
//                   <span className="text-xs text-gray-600">2021</span>
//                 </div>
//                 <p className="font-medium text-xs text-gray-700">Sciences et Technologies du Management et de la Gestion</p>
//                 <p className="text-xs text-gray-600">Option Mercatique - Lycée Saint Exupéry (94000) - Mention</p>
//               </div>
//             </div>
//           </section>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b pb-1 text-gray-900">Expériences Professionnelles</h2>
//             <div className="space-y-2">
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Téléconseillère</h3>
//                   <span className="text-xs text-gray-600">2024</span>
//                 </div>
//                 <p className="font-medium mb-1 text-xs text-gray-700">CAPS AUTO</p>
//                 <div className="pl-4">
//                   {[
//                     'Service client : Réponse rapide et efficace aux demandes, avec une attitude positive',
//                     'Résolution de problèmes : Analyse et proposition de solutions adaptées aux besoins des clients',
//                     'Communication : Maîtrise des échanges (oral et écrit) via téléphone, e-mail et chat',
//                     "Gestion des plaintes : Capacité à transformer les plaintes en opportunités d'amélioration",
//                     'Outils CRM : Utilisation des logiciels de gestion client pour le suivi des interactions'
//                   ].map((item, index) => (
//                     <div key={index} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-600">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Pôle création</h3>
//                   <span className="text-xs text-gray-600">2022-2023</span>
//                 </div>
//                 <p className="font-medium mb-1 text-xs text-gray-700">Agence Helice</p>
//                 <div className="pl-4">
//                   {[
//                     'Réalisations de chartes graphiques, Logos, affiches',
//                     "Création de cartons d'invitations et templates réseaux sociaux",
//                     'Conception de bannières et supports visuels divers'
//                   ].map((item, index) => (
//                     <div key={index} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-600">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b pb-1 text-gray-900">Projets</h2>
//             <p className="text-xs text-gray-600 italic">Section en cours de développement - Projets à venir</p>
//           </section>

//           <section>
//             <h2 className="text-lg font-bold mb-2 border-b pb-1 text-gray-900">Autre</h2>
//             <div className="flex justify-between mb-0.5">
//               <h3 className="font-semibold text-xs text-gray-800">Tour de l'Asie</h3>
//               <span className="text-xs text-gray-600">juin-septembre 2024</span>
//             </div>
//             <p className="text-xs text-gray-600">Voyage culturel et linguistique</p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;







                                        //CV mise en page bonne 
// import React from 'react';
// import { Github, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
// import html2pdf from 'html2pdf.js';

// const App: React.FC = () => {
//   const exportPDF = () => {
//     const element = document.getElementById('cv-content');
//     const opt = {
//       margin: [10, 10, 10, 10],
//       filename: 'CV_Daniel_Hinojosa_Cueto.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: {
//         scale: 4,
//         useCORS: true,
//         scrollY: 0,
//         width: 794,
//         height: 1123,
//         windowWidth: 794,
//         windowHeight: 1123
//       },
//       jsPDF: {
//         unit: 'mm',
//         format: 'a4',
//         orientation: 'portrait',
//         hotfixes: ["px_scaling"]
//       }
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   const bulletStyle = {
//     position: 'absolute',
//     left: '0',
//     top: '5px',
//     width: '3px',
//     height: '3px',
//     backgroundColor: '#2B6CB0',
//     borderRadius: '50%'
//   };

//   const listItemStyle = {
//     position: 'relative',
//     paddingLeft: '10px',
//     marginBottom: '6px',
//     lineHeight: '14px'
//   };

//   return (
//     <div>
//       <button 
//         onClick={exportPDF}
//         className="fixed top-4 right-4 z-50 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow"
//       >
//         Télécharger en PDF
//       </button>
      
//       <div id="cv-content" className="w-[210mm] h-[297mm] mx-auto bg-white" style={{ maxHeight: '297mm' }}>
//         <div className="p-6">
//           <header className="mb-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-2xl font-bold mb-1 text-gray-900">Jesus Daniel Hinojosa Cueto</h1>
//                 <h2 className="text-lg text-gray-700 mb-1">Développeur full-stack en alternance</h2>
//                 <p className="text-sm text-gray-600 mb-0.5">Étudiant à Ada Tech School - Formation en développement Full-stack</p>
//                 <p className="text-sm text-gray-600">Passionné par le développement et les technologies</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-bold text-sm bg-blue-50 p-2 rounded-lg text-gray-800">
//                   En recherche d'alternance en septembre 2024 en Île de France
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex flex-wrap gap-2 mt-2">
//               <a href="mailto:dvnielcueto@outlook.com" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800">
//                 <Mail size={12} /> dvnielcueto@outlook.com
//               </a>
//               <a href="tel:+33665375441" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800">
//                 <Phone size={12} /> 06 65 37 54 41
//               </a>
//               <span className="flex items-center gap-1 text-xs text-gray-600">
//                 <MapPin size={12} /> Bezons, 95870
//               </span>
//               <a href="https://github.com/DanielHNCT" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800"
//                 target="_blank" rel="noopener noreferrer">
//                 <Github size={12} /> GitHub
//               </a>
//               <a href="https://www.linkedin.com/in/dvn999" 
//                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800"
//                 target="_blank" rel="noopener noreferrer">
//                 <Linkedin size={12} /> LinkedIn
//               </a>
//             </div>

//             <div className="mt-2 p-2 bg-blue-50 rounded-lg">
//               <h3 className="font-semibold mb-1 text-xs text-gray-900">Détails de l'alternance recherchée :</h3>
//               <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
//                 <div>
//                   <p>Type : Contrat d'apprentissage</p>
//                   <p>Durée : 24 mois</p>
//                 </div>
//                 <div>
//                   <p>Disponibilité : Septembre 2024</p>
//                   <p>Rythme : 4j entreprise / 1j école</p>
//                 </div>
//               </div>
//             </div>
//           </header>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Compétences</h2>
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">FRONT-END</h3>
//                 <div style={{ position: 'relative' }}>
//                   {['JavaScript', 'HTML', 'CSS'].map((skill) => (
//                     <div key={skill} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span style={{ display: 'block' }} className="text-xs text-gray-700">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">BACK-END</h3>
//                 <div className="flex flex-col">
//                   {['PHP', 'SQL'].map((skill) => (
//                     <div key={skill} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-700">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-xs text-gray-800">LANGUES</h3>
//                 <div className="flex flex-col">
//                   {[
//                     'Espagnol (natif)',
//                     'Anglais (C1)',
//                     'Portugais (B1)'
//                   ].map((language) => (
//                     <div key={language} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-700">{language}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>



//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Éducation</h2>
//             <div className="space-y-2">
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Ada Tech School</h3>
//                   <span className="text-xs text-gray-600">2024-2026</span>
//                 </div>
//                 <p className="font-medium text-xs text-gray-700">Concepteur développeur d'applications</p>
//                 <p className="text-xs text-gray-600">Formation intensive de 9 mois suivie de 24 mois d'alternance</p>
//                 <p className="text-xs text-gray-600">Pédagogie par projets, méthodes agiles, travail en équipe</p>
//                 <div className="mt-1 pl-4">
//                   <div style={listItemStyle}>
//                     <span style={bulletStyle}></span>
//                     <span className="text-xs text-gray-600">Formation Module Exchange : Production musicale assistée par ordinateur (MAO)</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Bachelor professionnel MELEC</h3>
//                   <span className="text-xs text-gray-600">2020</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Lycée Louis Armand - Paris</p>
//               </div>
//             </div>
//           </section>

//           <section className="mb-3">
//             <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Expériences Professionnelles</h2>
//             <div className="space-y-2">
//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Chef d'équipe</h3>
//                   <span className="text-xs text-gray-600">Juillet 2022 - Septembre 2024</span>
//                 </div>
//                 <p className="font-medium mb-1 text-xs text-gray-700">Colis Privé</p>
//                 <div className="pl-4">
//                   {[
//                     'Management d\'équipe et optimisation des processus logistiques',
//                     'Prise de décision stratégique et résolution de problèmes',
//                     'Gestion des conflits et maintien de la fluidité des opérations'
//                   ].map((item, index) => (
//                     <div key={index} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-600">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Équipier polyvalent</h3>
//                   <span className="text-xs text-gray-600">Janvier 2022 - Juin 2022</span>
//                 </div>
//                 <p className="font-medium mb-1 text-xs text-gray-700">McDonald's</p>
//                 <div className="pl-4">
//                   {[
//                     'Gestion des stocks et des commandes en environnement dynamique',
//                     'Service client et travail d\'équipe',
//                     'Respect des procédures sanitaires et de sécurité'
//                   ].map((item, index) => (
//                     <div key={index} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-600">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-0.5">
//                   <h3 className="font-semibold text-xs text-gray-800">Chauffeur Livreur</h3>
//                   <span className="text-xs text-gray-600">Août 2020 - Décembre 2021</span>
//                 </div>
//                 <p className="font-medium mb-1 text-xs text-gray-700">Chronopost</p>
//                 <div className="pl-4">
//                   {[
//                     'Optimisation des tournées et gestion logistique',
//                     'Relation client et gestion du stress',
//                     'Organisation et hiérarchisation des priorités'
//                   ].map((item, index) => (
//                     <div key={index} style={listItemStyle}>
//                       <span style={bulletStyle}></span>
//                       <span className="text-xs text-gray-600">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Centres d'intérêt</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-semibold text-xs text-gray-800">Sport</h3>
//                 <p className="text-xs text-gray-600">Pratique régulière de la musculation</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-xs text-gray-800">Musique</h3>
//                 <p className="text-xs text-gray-600">Création de projets musicaux</p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;






import React from 'react';
import { Github, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const App: React.FC = () => {
  const exportPDF = () => {
    const element = document.getElementById('cv-content');
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'CV_Daniel_Hinojosa_Cueto.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        scrollY: 0,
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        hotfixes: ["px_scaling"]
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  const bulletStyle = {
    position: 'absolute',
    left: '0',
    top: '5px',
    width: '3px',
    height: '3px',
    backgroundColor: '#2B6CB0',
    borderRadius: '50%'
  };

  const listItemStyle = {
    position: 'relative',
    paddingLeft: '10px',
    marginBottom: '6px',
    lineHeight: '14px'
  };

  return (
    <div>
      <button 
        onClick={exportPDF}
        className="fixed top-4 right-4 z-50 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow"
      >
        Télécharger en PDF
      </button>
      
      <div id="cv-content" className="w-[210mm] h-[297mm] mx-auto bg-white" style={{ maxHeight: '297mm' }}>
        <div className="p-6">
          <header className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-1 text-gray-900">Jesus Daniel Hinojosa Cueto</h1>
                <h2 className="text-lg text-gray-700 mb-1">Développeur full-stack en alternance</h2>
                <p className="text-sm text-gray-600 mb-0.5">Étudiant à Ada Tech School - Formation en développement Full-stack</p>
                <p className="text-sm text-gray-600">Passionné par le développement et les technologies</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm bg-blue-50 p-2 rounded-lg text-gray-800">
                  En recherche d'alternance en septembre 2024 en Île de France
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="mailto:dvnielcueto@outlook.com" 
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800">
                <Mail size={12} /> dvnielcueto@outlook.com
              </a>
              <a href="tel:+33665375441" 
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800">
                <Phone size={12} /> 06 65 37 54 41
              </a>
              <span className="flex items-center gap-1 text-xs text-gray-600">
                <MapPin size={12} /> Bezons, 95870
              </span>
              <a href="https://github.com/DanielHNCT" 
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800"
                target="_blank" rel="noopener noreferrer">
                <Github size={12} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dvn999" 
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-800"
                target="_blank" rel="noopener noreferrer">
                <Linkedin size={12} /> LinkedIn
              </a>
            </div>

            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-1 text-xs text-gray-900">Détails de l'alternance recherchée :</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>
                  <p>Type : Contrat d'apprentissage</p>
                  <p>Durée : 24 mois</p>
                </div>
                <div>
                  <p>Disponibilité : Septembre 2024</p>
                  <p>Rythme : 4j entreprise / 1j école</p>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-3">
            <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Compétences</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-xs text-gray-800">FRONT-END</h3>
                <div style={{ position: 'relative' }}>
                  {['JavaScript', 'HTML', 'CSS'].map((skill) => (
                    <div key={skill} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span style={{ display: 'block' }} className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-xs text-gray-800">BACK-END</h3>
                <div className="flex flex-col">
                  {['PHP', 'SQL'].map((skill) => (
                    <div key={skill} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-xs text-gray-800">LANGUES</h3>
                <div className="flex flex-col">
                  {[
                    'Espagnol (natif)',
                    'Anglais (C1)',
                    'Portugais (B1)'
                  ].map((language) => (
                    <div key={language} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span className="text-xs text-gray-700">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>



          <section className="mb-3">
            <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Formation & Apprentissages</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Développeur Full Stack</h3>
                  <span className="text-xs text-gray-600">Actuellement</span>
                </div>
                <p className="font-medium text-xs text-gray-700">Ada Tech School, Paris</p>
                <p className="text-xs text-gray-600">Formation intensive suivie de 24 mois d'alternance</p>
              </div>

              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Formation Production Musicale M.A.O</h3>
                  <span className="text-xs text-gray-600">2022-2023</span>
                </div>
                <p className="font-medium text-xs text-gray-700">Module Exchange, Paris</p>
                <p className="text-xs text-gray-600">Production musicale assistée par ordinateur</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Bachelor professionnel MELEC</h3>
                  <span className="text-xs text-gray-600">2017-2020</span>
                </div>
                <p className="font-medium text-xs text-gray-700">Lycée Louis Armand, Paris</p>
              </div>
            </div>
          </section>

          <section className="mb-3">
            <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Expériences Professionnelles</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Chef d'équipe</h3>
                  <span className="text-xs text-gray-600">Juillet 2022 - Septembre 2024</span>
                </div>
                <p className="font-medium mb-1 text-xs text-gray-700">Colis Privé</p>
                <div className="pl-4">
                  {[
                    'Management d\'équipe et optimisation des processus logistiques',
                    'Prise de décision stratégique et résolution de problèmes',
                    'Gestion des conflits et maintien de la fluidité des opérations'
                  ].map((item, index) => (
                    <div key={index} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Équipier polyvalent</h3>
                  <span className="text-xs text-gray-600">Janvier 2022 - Juin 2022</span>
                </div>
                <p className="font-medium mb-1 text-xs text-gray-700">McDonald's</p>
                <div className="pl-4">
                  {[
                    'Gestion des stocks et des commandes en environnement dynamique',
                    'Service client et travail d\'équipe',
                    'Respect des procédures sanitaires et de sécurité'
                  ].map((item, index) => (
                    <div key={index} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-semibold text-xs text-gray-800">Chauffeur Livreur</h3>
                  <span className="text-xs text-gray-600">Août 2020 - Décembre 2021</span>
                </div>
                <p className="font-medium mb-1 text-xs text-gray-700">Chronopost</p>
                <div className="pl-4">
                  {[
                    'Optimisation des tournées et gestion logistique',
                    'Relation client et gestion du stress',
                    'Organisation et hiérarchisation des priorités'
                  ].map((item, index) => (
                    <div key={index} style={listItemStyle}>
                      <span style={bulletStyle}></span>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 border-b border-blue-100 pb-1 text-gray-900">Centres d'intérêt</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-xs text-gray-800">Sport</h3>
                <p className="text-xs text-gray-600">Pratique régulière de la musculation</p>
              </div>
              <div>
                <h3 className="font-semibold text-xs text-gray-800">Musique</h3>
                <p className="text-xs text-gray-600">Création de projets musicaux</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;

