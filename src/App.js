import React, { useState, useEffect, useRef } from 'react';

// --- Icônes SVG ---
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const LogOutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const LayoutDashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>;
const EditIcon = ({ width = 20, height = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const TrashIcon = ({ width = 20, height = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const ArchiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const AlertTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;

// --- Modèle de permissions ---
const ALL_PERMISSIONS = {
    canModifyPlanning: "Modifier le planning et les documents associés",
};

// --- Base de données de démonstration (Mise à jour) ---
const initialUsersData = {
  "j.technicien": { password: "password123", name: "Jean Technicien", id: "user1", isAdmin: false, permissions: { canModifyPlanning: true } },
  "s.martin": { password: "password456", name: "Sophie Martin", id: "user2", isAdmin: false, permissions: { canModifyPlanning: false } },
  "admin": { password: "adminpassword", name: "Admin SRP", id: "admin_user", isAdmin: true, permissions: {} },
};

const initialInterventionsData = [
    { id: "INT-101", userId: "user1", client: "Café de la Place", address: "1 Place de l'Église, 75006 Paris", service: "Réparation machine à café pro", date: "2025-06-09", time: "09:00", status: "À venir", isArchived: false, report: { notes: '', images: [], arrivalTime: null, departureTime: null, travelTime: '', signature: null }, documents: [{id: "doc1", name: "Devis_Machine_Cafe.pdf", url: "#"}] },
    { id: "INT-102", userId: "user1", client: "Marie Dubois", address: "25 Rue de la Paix, 75002 Paris", service: "Changement de chauffe-eau", date: "2025-06-09", time: "11:30", status: "À venir", isArchived: false, report: { notes: '', images: [], arrivalTime: null, departureTime: null, travelTime: '', signature: null }, documents: [] },
    { id: "INT-103", userId: "user2", client: "Boulangerie 'Au Bon Pain'", address: "88 Boulevard Voltaire, 75011 Paris", service: "Maintenance annuelle fournil", date: "2025-06-09", time: "14:00", status: "Terminée", isArchived: true, report: { notes: 'Maintenance effectuée avec succès.', images: [], arrivalTime: '2025-06-09T14:05:00', departureTime: '2025-06-09T15:30:00', travelTime: '30min', signature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' }, documents: [{id: "doc2", name: "Rapport_Maintenance_Precedent.pdf", url: "#"}] },
];

const initialPayslipsData = {
  "user1": [{ id: "FP-2025-05-01", month: "Mai 2025", date: "05/06/2025", url: "#" }],
  "user2": [{ id: "FP-2025-05-02", month: "Mai 2025", date: "05/06/2025", url: "#" }]
};

const initialLeaveRequestsData = [
    { id: "LR-01", userId: "user1", userName: "Jean Technicien", startDate: "2025-08-01", endDate: "2025-08-15", reason: "Vacances d'été", status: "Approuvé" },
    { id: "LR-02", userId: "user2", userName: "Sophie Martin", startDate: "2025-07-20", endDate: "2025-07-21", reason: "Weekend prolongé", status: "En attente" },
];

// --- Composants UI (Toast & Modal) ---

const Toast = ({ message, type, onDismiss }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    useEffect(() => {
        const timer = setTimeout(onDismiss, 4000);
        return () => clearTimeout(timer);
    }, [onDismiss]);

    return (
        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white ${bgColor} z-50 animate-fade-in`}>
            {message}
        </div>
    );
};

const ConfirmationModal = ({ title, message, passwordPrompt, onConfirm, onCancel }) => {
    const [password, setPassword] = useState('');
    
    const handleConfirm = () => {
        onConfirm(passwordPrompt ? password : undefined);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md m-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <AlertTriangleIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="text-lg leading-6 font-bold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{message}</p>
                    </div>
                </div>

                {passwordPrompt && (
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Pour confirmer, veuillez entrer votre mot de passe.</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm"
                            placeholder="Votre mot de passe"
                            autoFocus
                        />
                    </div>
                )}
                
                <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                    <button type="button" onClick={onCancel} className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold">Annuler</button>
                    <button type="button" onClick={handleConfirm} className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold">Confirmer</button>
                </div>
            </div>
        </div>
    );
};

// --- Composants ---
const LoginScreen = ({ onLogin, users }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userByUsername = users[username];
        const userByName = Object.values(users).find(u => u.name === username);
        const user = userByUsername || userByName;
        
        if (user && user.password === password) {
            setError('');
            onLogin(user);
        } else {
            setError('Identifiant ou mot de passe incorrect.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-800">Entreprise SRP</h1>
                    <p className="mt-2 text-slate-500">Connectez-vous à votre espace employé</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-sm font-bold text-slate-600 block mb-2">Identifiant ou Nom</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-slate-600 block mb-2">Mot de passe</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                    <button type="submit" className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">Connexion</button>
                </form>
            </div>
        </div>
    );
};

const GenericStatusBadge = ({ status, colorMap }) => {
    const statusClass = colorMap[status] || "bg-gray-200 text-gray-800";
    return <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusClass}`}>{status}</span>;
};

// --- Vues Employé ---
const EmployeeInterventionDetailView = ({ intervention, onBack, onUpdateReport, onUpdateIntervention, currentUser }) => {
    const [report, setReport] = useState(intervention.report);
    const signatureCanvasRef = useRef(null);
    const [newDocName, setNewDocName] = useState("");
    
    const canModify = currentUser.isAdmin || (currentUser.permissions && currentUser.permissions.canModifyPlanning);
    
    useEffect(() => {
        const canvas = signatureCanvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            let drawing = false;

            const startDrawing = (e) => { drawing = true; draw(e); };
            const stopDrawing = () => { drawing = false; ctx.beginPath(); };
            const draw = (e) => {
                if (!drawing) return;
                const rect = canvas.getBoundingClientRect();
                const x = (e.clientX || e.touches[0].clientX) - rect.left;
                const y = (e.clientY || e.touches[0].clientY) - rect.top;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            };
            
            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('touchstart', startDrawing);
            canvas.addEventListener('touchend', stopDrawing);
            canvas.addEventListener('touchmove', draw);

            return () => {
                canvas.removeEventListener('mousedown', startDrawing);
                canvas.removeEventListener('mouseup', stopDrawing);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('touchstart', startDrawing);
                canvas.removeEventListener('touchend', stopDrawing);
                canvas.removeEventListener('touchmove', draw);
            };
        }
    }, []);
    
    const handleReportChange = (field, value) => setReport(prev => ({ ...prev, [field]: value }));
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        handleReportChange('images', [...report.images, ...urls]);
    };
    const handleTimeAction = (field) => handleReportChange(field, new Date().toISOString());

    const handleSave = () => {
        const signatureDataUrl = signatureCanvasRef.current.toDataURL();
        onUpdateReport(intervention.id, { ...report, signature: signatureDataUrl });
    };
    
    const formatTime = (iso) => iso ? new Date(iso).toLocaleTimeString('fr-FR') : 'N/A';
    
    const handleDocumentAdd = () => {
        if (!newDocName) return;
        const newDocument = { id: `doc-${Date.now()}`, name: newDocName, url: "#" };
        const updatedIntervention = {
            ...intervention,
            documents: [...(intervention.documents || []), newDocument]
        };
        onUpdateIntervention(updatedIntervention);
        setNewDocName("");
    };

    const handleDocumentDelete = (docId) => {
        const updatedIntervention = {
            ...intervention,
            documents: intervention.documents.filter(d => d.id !== docId)
        };
        onUpdateIntervention(updatedIntervention);
    };

    return (
        <div>
            <button onClick={onBack} className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline"><ChevronLeftIcon /> Retour au planning</button>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">{intervention.client}</h2>
                    <p className="text-slate-600">{intervention.service}</p>
                </div>

                <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2 text-slate-700">Documents Associés</h3>
                    {(intervention.documents && intervention.documents.length > 0) ? (
                        <ul className="divide-y divide-slate-200">
                            {intervention.documents.map(doc => (
                                <li key={doc.id} className="py-2 flex justify-between items-center">
                                    <a href={doc.url} download={doc.name} className="text-blue-600 hover:underline">{doc.name}</a>
                                    {canModify && (
                                        <button onClick={() => handleDocumentDelete(doc.id)} className="p-1 text-red-500 hover:text-red-700">
                                            <TrashIcon width={16} height={16} />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-slate-500">Aucun document attaché.</p>
                    )}
                    {canModify && (
                        <div className="mt-4 flex gap-2">
                            <input 
                                type="text" 
                                value={newDocName} 
                                onChange={(e) => setNewDocName(e.target.value)} 
                                placeholder="Nom du document (ex: devis.pdf)"
                                className="flex-grow p-2 border border-slate-300 rounded"
                            />
                            <button onClick={handleDocumentAdd} className="px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600">Ajouter</button>
                        </div>
                    )}
                </div>
                
                <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2 text-slate-700">Pointage</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => handleTimeAction('arrivalTime')} className="p-3 bg-green-100 text-green-800 rounded-lg disabled:opacity-50 font-medium" disabled={report.arrivalTime}>Arrivée sur site</button>
                        <button onClick={() => handleTimeAction('departureTime')} className="p-3 bg-red-100 text-red-800 rounded-lg disabled:opacity-50 font-medium" disabled={!report.arrivalTime || report.departureTime}>Départ du site</button>
                    </div>
                    <div className="text-sm mt-2 text-slate-600">
                        <p>Heure d'arrivée: <span className="font-medium text-slate-800">{formatTime(report.arrivalTime)}</span></p>
                        <p>Heure de départ: <span className="font-medium text-slate-800">{formatTime(report.departureTime)}</span></p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mt-2">Temps de trajet (ex: 30min)</label>
                        <input type="text" value={report.travelTime} onChange={e => handleReportChange('travelTime', e.target.value)} className="w-full p-2 border border-slate-300 rounded mt-1"/>
                    </div>
                </div>

                <div className="border-t pt-4">
                     <h3 className="text-lg font-semibold mb-2 text-slate-700">Rapport de chantier</h3>
                    <textarea value={report.notes} onChange={e => handleReportChange('notes', e.target.value)} placeholder="Détails de l'intervention..." rows="4" className="w-full p-2 border border-slate-300 rounded"></textarea>
                    
                    <h4 className="font-semibold mt-4 mb-2 text-slate-700">Photos</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                        {report.images.map((img, idx) => <img key={idx} src={img} alt={`report-${idx}`} className="w-full h-24 object-cover rounded-md shadow"/>)}
                    </div>
                    <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                </div>

                <div className="border-t pt-4">
                     <h3 className="text-lg font-semibold mb-2 text-slate-700">Signature du client</h3>
                     <canvas ref={signatureCanvasRef} className="border border-slate-400 rounded-md w-full h-32 bg-slate-50"></canvas>
                     <button onClick={() => signatureCanvasRef.current.getContext('2d').clearRect(0, 0, signatureCanvasRef.current.width, signatureCanvasRef.current.height)} className="text-xs text-slate-600 hover:underline mt-1">Effacer</button>
                </div>
                
                <button onClick={handleSave} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">Sauvegarder et Clôturer le rapport</button>
            </div>
        </div>
    );
};

const EmployeePlanningView = ({ interventions, onSelectIntervention, currentUser }) => (
    <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Votre Planning</h2>
        {interventions.length > 0 ? interventions.map(int => (
            <div key={int.id} onClick={() => onSelectIntervention(int)} className="bg-white rounded-lg shadow-md mb-3 border-l-4 border-blue-500 overflow-hidden cursor-pointer hover:bg-slate-50 transition">
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-slate-800">{int.client}</p>
                            <p className="text-sm text-slate-600">{int.service}</p>
                        </div>
                        <GenericStatusBadge status={int.status} colorMap={{ "À venir": "bg-blue-100 text-blue-800", "Terminée": "bg-green-100 text-green-800" }}/>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">{int.date} à {int.time}</p>
                </div>
                {(currentUser.permissions && currentUser.permissions.canModifyPlanning && int.userId === currentUser.id && !int.isArchived) && (
                     <div className="border-t bg-slate-50 px-4 py-2 text-right">
                        <span className="text-sm font-semibold text-blue-600">Vous pouvez modifier les documents sur la page de détail.</span>
                    </div>
                )}
            </div>
        )) : 
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-slate-500">
            <p>Aucune intervention planifiée pour le moment.</p>
        </div>
        }
    </div>
);


const EmployeeLeaveView = ({ leaveRequests, onSubmitRequest, userName, showToast }) => {
    const [showForm, setShowForm] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!startDate || !endDate || !reason) {
            showToast("Veuillez remplir tous les champs.", "error");
            return;
        }
        onSubmitRequest({
            userName: userName,
            startDate,
            endDate,
            reason
        });
        setShowForm(false);
        setStartDate('');
        setEndDate('');
        setReason('');
    };
    const statusColorMap = { "Approuvé": "bg-green-100 text-green-800", "En attente": "bg-yellow-100 text-yellow-800", "Rejeté": "bg-red-100 text-red-800" };
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-800">Vos Demandes de Congés</h2>
                <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-2"><PlusIcon/>{showForm ? 'Annuler' : 'Nouvelle Demande'}</button>
            </div>
            {showForm && (
                 <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6 space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold text-slate-700">Nouvelle demande de congé</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Date de début</label>
                            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Date de fin</label>
                            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Motif de la demande</label>
                        <textarea value={reason} onChange={e => setReason(e.target.value)} required rows="3" className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">Envoyer la demande</button>
                </form>
            )}
            <div className="bg-white p-6 rounded-lg shadow-md">
                 <h3 className="text-xl font-semibold text-slate-800 mb-4">Historique de vos demandes</h3>
                 <ul className="divide-y divide-slate-200">
                    {leaveRequests.map(req => (<li key={req.id} className="py-4 flex justify-between items-center"><div><p className="font-semibold text-slate-800">{req.reason}</p><p className="text-sm text-slate-500">Du {req.startDate} au {req.endDate}</p></div><GenericStatusBadge status={req.status} colorMap={statusColorMap} /></li>))}
                </ul>
            </div>
        </div>
    );
};

const CoffreNumeriqueView = ({ payslips }) => (
    <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Votre Coffre-fort</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Fiches de paie</h3>
            <ul className="divide-y divide-slate-200">
                {payslips.length > 0 ? payslips.map(doc => <li key={doc.id} className="py-4 flex justify-between items-center"><div><p className="font-semibold">{doc.month}</p><p className="text-sm text-slate-500">{doc.date}</p></div><a href={doc.url} download className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">Télécharger</a></li>) : <p className="text-slate-500">Aucun document.</p>}
            </ul>
        </div>
    </div>
);

// --- Vues Admin ---
const AdminDashboard = ({ interventions, leaveRequests }) => {
    const pendingLeaves = leaveRequests.filter(r => r.status === 'En attente').length;
    const upcomingInterventions = interventions.filter(i => !i.isArchived).length;
    return (
        <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Tableau de Bord</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow"><p className="text-3xl font-bold">{upcomingInterventions}</p><p className="text-slate-600">Interventions planifiées</p></div>
                <div className="bg-white p-6 rounded-lg shadow"><p className="text-3xl font-bold">{pendingLeaves}</p><p className="text-slate-600">Demandes de congés en attente</p></div>
            </div>
        </div>
    )
};

const AdminPlanningView = ({ interventions, users, onAddIntervention, onArchive, onDelete, onEdit }) => {
    const [showForm, setShowForm] = useState(false);
    const [formValues, setFormValues] = useState({ userId: '', client: '', address: '', service: '', date: '', time: '' });
    
    const handleInputChange = (e) => setFormValues({...formValues, [e.target.name]: e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddIntervention({ ...formValues, id: `INT-${Date.now()}`, status: 'À venir', isArchived: false, report: { notes: '', images: [], arrivalTime: null, departureTime: null, travelTime: '', signature: null }, documents: [] });
        setShowForm(false);
        setFormValues({ userId: '', client: '', address: '', service: '', date: '', time: '' });
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Gestion du Planning</h3>
                <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-2"><PlusIcon/>{showForm ? 'Annuler' : 'Nouvelle Intervention'}</button>
            </div>
            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6 space-y-4">
                    <input name="client" value={formValues.client} onChange={handleInputChange} placeholder="Nom du client" required className="w-full p-2 border border-slate-300 rounded"/>
                    <input name="address" value={formValues.address} onChange={handleInputChange} placeholder="Adresse" required className="w-full p-2 border border-slate-300 rounded"/>
                    <input name="service" value={formValues.service} onChange={handleInputChange} placeholder="Service" required className="w-full p-2 border border-slate-300 rounded"/>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="date" type="date" value={formValues.date} onChange={handleInputChange} required className="w-full p-2 border border-slate-300 rounded"/>
                        <input name="time" type="time" value={formValues.time} onChange={handleInputChange} required className="w-full p-2 border border-slate-300 rounded"/>
                    </div>
                    <select name="userId" value={formValues.userId} onChange={handleInputChange} required className="w-full p-2 border border-slate-300 rounded">
                        <option value="">Assigner à...</option>
                        {Object.values(users).filter(u => !u.isAdmin).map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                    </select>
                    <button type="submit" className="w-full py-2 bg-green-600 text-white rounded font-semibold">Ajouter</button>
                </form>
            )}
            <div className="bg-white p-6 rounded-lg shadow">
                 <ul className="divide-y divide-slate-200">
                    {interventions.map(int => (<li key={int.id} className="py-3 flex justify-between items-center">
                        <div className="flex-grow">
                            <p className="font-semibold text-slate-800">{int.client} - {int.service}</p>
                            <p className="text-sm text-slate-600">Assigné à: {(Object.values(users).find(u => u.id === int.userId) || { name: 'Inconnu' }).name}</p>
                            <p className="text-sm text-slate-500">{int.date} à {int.time}</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <button onClick={() => onEdit(int)} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full" title="Modifier les détails et documents"><EditIcon/></button>
                             <button onClick={() => onArchive(int.id)} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full" title="Archiver"><ArchiveIcon/></button>
                             <button onClick={() => onDelete(int.id)} className="p-2 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-full" title="Supprimer"><TrashIcon/></button>
                        </div>
                    </li>))}
                </ul>
            </div>
        </div>
    )
};

const EditInterventionModal = ({ intervention, onSave, onCancel, users }) => {
    const [formData, setFormData] = useState(intervention);
    const [newDocName, setNewDocName] = useState("");
    
    useEffect(() => {
        setFormData(intervention);
    }, [intervention]);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleDocumentAdd = () => {
        if (!newDocName) return;
        const newDocument = { id: `doc-${Date.now()}`, name: newDocName, url: "#" };
        setFormData(prev => ({
            ...prev,
            documents: [...(prev.documents || []), newDocument]
        }));
        setNewDocName("");
    };

    const handleDocumentDelete = (docId) => {
        setFormData(prev => ({
            ...prev,
            documents: prev.documents.filter(d => d.id !== docId)
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg max-h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Modifier l'intervention</h3>
                    <button type="button" onClick={onCancel} className="p-1"><XIcon /></button>
                </div>
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Client</label>
                        <input name="client" value={formData.client} onChange={handleChange} placeholder="Nom du client" required className="w-full p-2 border rounded mt-1"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Adresse</label>
                        <input name="address" value={formData.address} onChange={handleChange} placeholder="Adresse" required className="w-full p-2 border rounded mt-1"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700">Date</label>
                           <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded mt-1"/>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700">Heure</label>
                           <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full p-2 border rounded mt-1"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Assigner à</label>
                        <select name="userId" value={formData.userId} onChange={handleChange} required className="w-full p-2 border rounded mt-1">
                            {Object.values(users).filter(u => !u.isAdmin).map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>
                    </div>

                    <div className="border-t pt-4">
                        <h4 className="text-lg font-semibold mb-2 text-slate-700">Gérer les documents</h4>
                        {(formData.documents && formData.documents.length > 0) ? (
                            <ul className="divide-y divide-slate-200 mb-4 max-h-40 overflow-y-auto">
                                {formData.documents.map(doc => (
                                    <li key={doc.id} className="py-2 flex justify-between items-center">
                                        <span className="text-sm">{doc.name}</span>
                                        <button type="button" onClick={() => handleDocumentDelete(doc.id)} className="p-1 text-red-500 hover:text-red-700">
                                            <TrashIcon width={16} height={16} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 mb-2">Aucun document.</p>
                        )}
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                value={newDocName} 
                                onChange={(e) => setNewDocName(e.target.value)} 
                                placeholder="Nom du nouveau document"
                                className="flex-grow p-2 border border-slate-300 rounded"
                            />
                            <button type="button" onClick={handleDocumentAdd} className="px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600">Ajouter</button>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const AdminArchivesView = ({ interventions, users }) => (
    <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Interventions Archivées</h3>
        <div className="bg-white p-6 rounded-lg shadow">
             <ul className="divide-y divide-slate-200">
                {interventions.length > 0 ? interventions.map(int => (<li key={int.id} className="py-3 flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-slate-800">{int.client} - {int.service}</p>
                        <p className="text-sm text-slate-600">Terminée par: {(Object.values(users).find(u => u.id === int.userId) || { name: 'Inconnu' }).name} le {int.date}</p>
                    </div>
                    <button onClick={() => alert("Simulation d'export des données : \n" + JSON.stringify(int.report, null, 2))} className="p-2 text-slate-600 hover:text-green-600 hover:bg-slate-100 rounded-full" title="Exporter les données"><DownloadIcon/></button>
                </li>)) : <p className="text-slate-500">Aucune intervention archivée.</p>}
            </ul>
        </div>
    </div>
);

const AdminLeaveView = ({ leaveRequests, onUpdateRequestStatus }) => {
    const statusColorMap = { "Approuvé": "bg-green-100 text-green-800", "En attente": "bg-yellow-100 text-yellow-800", "Rejeté": "bg-red-100 text-red-800" };
    return (
        <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Gestion des Demandes de Congés</h3>
            <div className="bg-white p-6 rounded-lg shadow">
                <ul className="divide-y divide-slate-200">
                    {leaveRequests.map(req => (
                        <li key={req.id} className="py-4">
                            <div>
                                <p className="font-semibold">{req.userName} - <span className="font-normal">{req.reason}</span></p>
                                <p className="text-sm text-slate-600">Du {req.startDate} au {req.endDate}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <GenericStatusBadge status={req.status} colorMap={statusColorMap}/>
                                {req.status === 'En attente' && (
                                    <div className="flex gap-2">
                                        <button onClick={() => onUpdateRequestStatus(req.id, 'Approuvé')} className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200"><CheckIcon/></button>
                                        <button onClick={() => onUpdateRequestStatus(req.id, 'Rejeté')} className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200"><XIcon/></button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

const EditUserModal = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({ ...user, newPassword: '', adminPassword: '' });

    useEffect(() => {
        setFormData({ ...user, newPassword: '', adminPassword: '' });
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePermissionChange = (permKey, isChecked) => {
        setFormData(prev => ({
            ...prev,
            permissions: {
                ...prev.permissions,
                [permKey]: isChecked
            }
        }));
    };
    
    const handleSave = (e) => {
        e.preventDefault();
        onSave(formData, formData.adminPassword);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Modifier le compte</h3>
                    <button onClick={onCancel} className="p-1"><XIcon /></button>
                </div>
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mt-1"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Identifiant de connexion</label>
                        <input name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded mt-1" readOnly={user.isAdmin}/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nouveau mot de passe (laisser vide pour ne pas changer)</label>
                        <input name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} placeholder="••••••••" className="w-full p-2 border rounded mt-1"/>
                    </div>
                    
                    {!user.isAdmin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Permissions</label>
                            <div className="mt-2 space-y-2">
                                {Object.entries(ALL_PERMISSIONS).map(([key, label]) => (
                                    <label key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            checked={!!formData.permissions?.[key]}
                                            onChange={(e) => handlePermissionChange(key, e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                        <p className="font-bold">Vérification requise</p>
                        <p>Pour enregistrer les modifications, veuillez entrer votre mot de passe administrateur.</p>
                         <input name="adminPassword" type="password" value={formData.adminPassword} onChange={handleChange} placeholder="Votre mot de passe actuel" required className="w-full p-2 border rounded mt-2"/>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const AdminUserView = ({ users, currentUser, onAddUser, onUpdateUser, onDeleteUser }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [addFormValues, setAddFormValues] = useState({ name: '', username: '', password: '' });
    const [editingUser, setEditingUser] = useState(null);
    const [adminPasswordForAdd, setAdminPasswordForAdd] = useState('');

    const handleAddInputChange = (e) => setAddFormValues({...addFormValues, [e.target.name]: e.target.value});
    
    const handleAddSubmit = (e) => {
        e.preventDefault();
        onAddUser({
            ...addFormValues,
            id: `user-${Date.now()}`,
            isAdmin: false,
            permissions: {} // Permissions par défaut
        }, adminPasswordForAdd);
        setShowAddForm(false);
        setAddFormValues({ name: '', username: '', password: '' });
        setAdminPasswordForAdd('');
    };

    const handleUpdateSubmit = (updatedUserData, passwordToCheck) => {
        onUpdateUser(updatedUserData, passwordToCheck);
        setEditingUser(null);
    };
    
    const adminUser = Object.values(users).find(u => u.isAdmin);
    const adminUsername = Object.keys(users).find(key => users[key].id === adminUser.id);

    return (
        <div>
            {editingUser && <EditUserModal user={{ ...editingUser, username: Object.keys(users).find(key => users[key].id === editingUser.id) }} onSave={handleUpdateSubmit} onCancel={() => setEditingUser(null)} />}

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Mon Compte Administrateur</h3>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">{adminUser.name}</p>
                        <p className="text-sm text-slate-500">{adminUsername}</p>
                    </div>
                    <button onClick={() => setEditingUser(adminUser)} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full"><EditIcon/></button>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Employés</h3>
                <button onClick={() => setShowAddForm(!showAddForm)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-2"><PlusIcon/>{showAddForm ? 'Annuler' : 'Nouvel Employé'}</button>
            </div>

             {showAddForm && (
                <form onSubmit={handleAddSubmit} className="bg-white p-6 rounded-lg shadow mb-6 space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold">Ajouter un nouvel employé</h3>
                    <input name="name" value={addFormValues.name} onChange={handleAddInputChange} placeholder="Nom complet" required className="w-full p-2 border rounded"/>
                    <input name="username" value={addFormValues.username} onChange={handleAddInputChange} placeholder="Identifiant de connexion (ex: p.nom)" required className="w-full p-2 border rounded"/>
                    <input name="password" type="password" value={addFormValues.password} onChange={handleAddInputChange} placeholder="Mot de passe initial" required className="w-full p-2 border rounded"/>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                         <p>Pour des raisons de sécurité, veuillez confirmer votre mot de passe administrateur.</p>
                         <input type="password" value={adminPasswordForAdd} onChange={(e) => setAdminPasswordForAdd(e.target.value)} placeholder="Votre mot de passe" required className="w-full p-2 border rounded mt-2"/>
                    </div>
                    <button type="submit" className="w-full py-2 bg-green-600 text-white rounded font-semibold">Ajouter l'employé</button>
                </form>
            )}

            <div className="bg-white p-6 rounded-lg shadow">
                 <ul className="divide-y divide-slate-200">
                    {Object.entries(users).filter(([, u]) => !u.isAdmin).map(([username, u]) => (
                        <li key={u.id} className="py-3 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{u.name}</p>
                                <p className="text-sm text-slate-500">{username}</p>
                                <div className="flex gap-2 mt-1">
                                    {u.permissions?.canModifyPlanning && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Modif. Planning</span>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => setEditingUser(u)} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full"><EditIcon/></button>
                                <button onClick={() => onDeleteUser(u.id)} className="p-2 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-full"><TrashIcon/></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const AdminVaultView = ({ users, allPayslips, onAddPayslip, showToast }) => { 
    const [selectedUserId, setSelectedUserId] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [formUserId, setFormUserId] = useState('');
    const [formMonth, setFormMonth] = useState('');
    const [formDate, setFormDate] = useState('');
    const handleAddSubmit = (e) => { e.preventDefault(); if(!formUserId || !formMonth || !formDate) { showToast("Veuillez remplir tous les champs.", "error"); return; } onAddPayslip({userId: formUserId, payslip: { id: `FP-${Date.now()}`, month: formMonth, date: formDate, url: "#"}}); setShowAddForm(false); setFormUserId(''); setFormMonth(''); setFormDate(''); };
    const employees = Object.values(users).filter(u => !u.isAdmin);
    return (<div><div className="flex justify-between items-center mb-6"><h3 className="text-xl font-bold text-slate-800">Gestion des Coffres-forts</h3><button onClick={() => setShowAddForm(!showAddForm)} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">{showAddForm ? 'Annuler' : 'Ajouter Fiche de Paie'}</button></div>{showAddForm && (<div className="bg-white p-6 rounded-lg shadow-md mb-6"><form onSubmit={handleAddSubmit} className="space-y-4"><h3 className="text-xl font-semibold text-slate-800">Ajouter une Fiche de Paie</h3><div><label>Employé</label><select value={formUserId} onChange={e => setFormUserId(e.target.value)} required className="mt-1 block w-full p-2 border rounded"><option value="">-- Sélectionner --</option>{employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}</select></div><div className="grid md:grid-cols-2 gap-4"><div><label>Mois (ex: Juin 2025)</label><input type="text" value={formMonth} onChange={e => setFormMonth(e.target.value)} required className="mt-1 block w-full p-2 border rounded"/></div><div><label>Date de réception</label><input type="date" value={formDate} onChange={e => setFormDate(e.target.value)} required className="mt-1 block w-full p-2 border rounded"/></div></div><div><label>Fichier PDF (simulation)</label><input type="file" className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/></div><button type="submit" className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg">Valider</button></form></div>)}{<div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-xl font-semibold text-slate-800 mb-4">Consulter un coffre-fort</h3><div><label>Sélectionner un employé</label><select value={selectedUserId} onChange={e => setSelectedUserId(e.target.value)} className="mt-1 block w-full p-2 border rounded"><option value="">-- Sélectionner --</option>{employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}</select></div>{selectedUserId && (<div className="mt-6"><h4 className="font-semibold">Documents pour {(Object.values(users).find(u=>u.id === selectedUserId) || {name: 'Inconnu'}).name}</h4><ul className="divide-y mt-2">{(allPayslips[selectedUserId] || []).length > 0 ? (allPayslips[selectedUserId] || []).map(doc => <li key={doc.id} className="py-3 flex justify-between items-center"><div><p>{doc.month}</p><p className="text-sm text-slate-500">{doc.date}</p></div><a href={doc.url} download className="text-blue-500 hover:underline text-sm">Télécharger</a></li>) : <p className="text-slate-500 mt-2">Aucun document.</p>}</ul></div>)}</div>}</div>);
};

const AdminMasterView = ({ users, interventions, leaveRequests, payslips, currentUser, onAddIntervention, onUpdateLeaveStatus, onAddUser, onUpdateUser, onDeleteUser, onAddPayslip, onArchiveIntervention, onDeleteIntervention, onEditIntervention, showToast }) => {
    const [adminView, setAdminView] = useState('dashboard');
    const adminTabs = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboardIcon /> },
        { id: 'planning', label: 'Planning', icon: <BriefcaseIcon /> },
        { id: 'leaves', label: 'Congés', icon: <SunIcon /> },
        { id: 'users', label: 'Employés', icon: <UsersIcon /> },
        { id: 'vaults', label: 'Coffres-forts', icon: <LockIcon /> },
        { id: 'archives', label: 'Archives', icon: <ArchiveIcon /> },
    ];

    return (
        <div>
            <div className="mb-6 border-b border-slate-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto">
                    {adminTabs.map(tab => (
                        <button key={tab.id} onClick={() => setAdminView(tab.id)} className={`whitespace-nowrap flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${adminView === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
                           {tab.icon} {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            {adminView === 'dashboard' && <AdminDashboard interventions={interventions} leaveRequests={leaveRequests} />}
            {adminView === 'planning' && <AdminPlanningView interventions={interventions.filter(i => !i.isArchived)} users={users} onAddIntervention={onAddIntervention} onArchive={onArchiveIntervention} onDelete={onDeleteIntervention} onEdit={onEditIntervention} />}
            {adminView === 'leaves' && <AdminLeaveView leaveRequests={leaveRequests} onUpdateRequestStatus={onUpdateLeaveStatus} />}
            {adminView === 'users' && <AdminUserView users={users} currentUser={currentUser} onAddUser={onAddUser} onUpdateUser={onUpdateUser} onDeleteUser={onDeleteUser} />}
            {adminView === 'vaults' && <AdminVaultView users={users} allPayslips={payslips} onAddPayslip={onAddPayslip} showToast={showToast} />}
            {adminView === 'archives' && <AdminArchivesView interventions={interventions.filter(i => i.isArchived)} users={users} />}
        </div>
    );
};


// --- Application principale ---
function App() {
  const loadState = (key, initialState) => {
      try {
          const serializedState = localStorage.getItem(key);
          if (serializedState === null) return initialState;
          return JSON.parse(serializedState);
      } catch (e) {
          console.warn(`Could not load state for ${key} from localStorage`, e);
          return initialState;
      }
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('planning');
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [editingIntervention, setEditingIntervention] = useState(null);
  
  const [users, setUsers] = useState(() => loadState('srp_users', initialUsersData));
  const [interventions, setInterventions] = useState(() => loadState('srp_interventions', initialInterventionsData));
  const [payslips, setPayslips] = useState(() => loadState('srp_payslips', initialPayslipsData));
  const [leaveRequests, setLeaveRequests] = useState(() => loadState('srp_leave_requests', initialLeaveRequestsData));

  useEffect(() => { localStorage.setItem('srp_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('srp_interventions', JSON.stringify(interventions)); }, [interventions]);
  useEffect(() => { localStorage.setItem('srp_payslips', JSON.stringify(payslips)); }, [payslips]);
  useEffect(() => { localStorage.setItem('srp_leave_requests', JSON.stringify(leaveRequests)); }, [leaveRequests]);

  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);

  const showToast = (message, type = 'success') => setToast({ message, type });
  const showModal = (config) => setModal(config);
  
  const handleLogin = (user) => {
      setCurrentUser(user);
      setCurrentView(user.isAdmin ? 'admin' : 'planning');
  };
  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedIntervention(null);
    setEditingIntervention(null);
  };
  
  const handleAddUser = (newUser, adminPassword) => {
    if (currentUser.password !== adminPassword) {
        showToast("Mot de passe administrateur incorrect.", "error");
        return;
    }
    if(users[newUser.username]){
        showToast("Cet identifiant est déjà pris.", "error");
        return;
    }
    setUsers(prev => ({...prev, [newUser.username]: newUser}));
    showToast("Employé ajouté avec succès !");
  };
  
  const handleUpdateUser = (updatedUserData, adminPassword) => {
      if (currentUser.password !== adminPassword) {
          showToast("Mot de passe administrateur incorrect.", "error");
          return;
      }
      const oldUsername = Object.keys(users).find(key => users[key].id === updatedUserData.id);
      if (!oldUsername) return;
      
      const newUsername = updatedUserData.username;
      
      setUsers(prev => {
          const newUsers = { ...prev };
          let userToUpdate = { ...newUsers[oldUsername] };
          
          userToUpdate.name = updatedUserData.name;
          userToUpdate.permissions = updatedUserData.permissions || {};
          if (updatedUserData.newPassword) {
              userToUpdate.password = updatedUserData.newPassword;
          }
          
          if (oldUsername !== newUsername && !userToUpdate.isAdmin) {
              if (newUsers[newUsername]) {
                  showToast("Le nouvel identifiant est déjà utilisé par un autre compte.", "error");
                  return prev;
              }
              delete newUsers[oldUsername];
              newUsers[newUsername] = userToUpdate;
          } else {
              newUsers[oldUsername] = userToUpdate;
          }
          
          if(userToUpdate.id === currentUser.id) {
              setCurrentUser(userToUpdate);
          }

          return newUsers;
      });

      showToast("Compte mis à jour avec succès !");
  };

  const handleDeleteUser = (userIdToDelete) => {
      showModal({
          title: "Supprimer l'employé ?",
          message: "Cette action est irréversible. Toutes les données associées pourraient être perdues.",
          passwordPrompt: true,
          onConfirm: (adminPassword) => {
              if (adminPassword !== currentUser.password) {
                  showToast("Mot de passe incorrect. Suppression annulée.", "error");
                  setModal(null);
                  return;
              }
              const usernameToDelete = Object.keys(users).find(key => users[key].id === userIdToDelete);
              if (usernameToDelete) {
                  const newUsers = { ...users };
                  delete newUsers[usernameToDelete];
                  setUsers(newUsers);
                  showToast("Employé supprimé.");
              }
              setModal(null);
          },
          onCancel: () => setModal(null)
      });
  };
  
  const handleAddIntervention = (intervention) => {
      setInterventions(prev => [...prev, intervention].sort((a,b) => new Date(a.date) - new Date(b.date)));
      showToast("Intervention ajoutée au planning.");
  };
  
  const handleUpdateIntervention = (updatedIntervention) => {
      setInterventions(prev => prev.map(i => i.id === updatedIntervention.id ? updatedIntervention : i));
      if (selectedIntervention?.id === updatedIntervention.id) {
        setSelectedIntervention(updatedIntervention);
      }
      setEditingIntervention(null);
      showToast("Intervention mise à jour.");
  };

  const handleUpdateLeaveStatus = (requestId, status) => {
      setLeaveRequests(prev => prev.map(req => req.id === requestId ? { ...req, status } : req));
      showToast(`Demande de congé ${status === 'Approuvé' ? 'approuvée' : 'rejetée'}.`);
  };

  const handleAddPayslip = ({ userId, payslip }) => {
      setPayslips(prev => ({ ...prev, [userId]: [...(prev[userId] || []), payslip] }));
      const userKey = Object.keys(users).find(key => users[key].id === userId);
      const userName = userKey ? users[userKey].name : 'Inconnu';
      showToast(`Fiche de paie ajoutée pour ${userName}.`);
  };

  const handleArchiveIntervention = (id) => {
      setInterventions(prev => prev.map(i => i.id === id ? { ...i, isArchived: true, status: 'Archivée' } : i));
      showToast("Intervention archivée.");
  };

  const handleDeleteIntervention = (id) => {
      showModal({
          title: "Supprimer l'intervention ?",
          message: "Voulez-vous vraiment supprimer définitivement cette intervention du planning ?",
          passwordPrompt: false,
          onConfirm: () => {
              setInterventions(prev => prev.filter(i => i.id !== id));
              showToast("Intervention supprimée.");
              setModal(null);
          },
          onCancel: () => setModal(null)
      });
  };

  const handleUpdateInterventionReport = (id, newReport) => {
      setInterventions(prev => prev.map(i => i.id === id ? {...i, report: newReport, status: 'Terminée'} : i));
      setSelectedIntervention(null);
      showToast("Rapport d'intervention sauvegardé.", "success");
  };

  const handleAddLeaveRequest = (newRequestData) => {
      const newRequest = {
          ...newRequestData,
          id: `LR-${Date.now()}`,
          userId: currentUser.id,
          status: 'En attente'
      };
      setLeaveRequests(prev => [...prev, newRequest]);
      showToast("Votre demande de congé a été envoyée.");
  };


  if (!currentUser) {
      return <LoginScreen onLogin={handleLogin} users={users} />;
  }

  const employeeNavItems = [
      { id: 'planning', label: 'Planning', icon: <BriefcaseIcon/> },
      { id: 'leaves', label: 'Congés', icon: <SunIcon/> },
      { id: 'vault', label: 'Coffre-fort', icon: <LockIcon/> },
  ];
  const adminNavItems = [{ id: 'admin', label: 'Administration', icon: <ShieldIcon/> }];
  const navItems = currentUser.isAdmin ? adminNavItems : employeeNavItems;

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}
      {modal && <ConfirmationModal {...modal} />}
      {editingIntervention && (
          <EditInterventionModal
              intervention={editingIntervention}
              onSave={handleUpdateIntervention}
              onCancel={() => setEditingIntervention(null)}
              users={users}
          />
      )}

      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <span className="font-semibold text-slate-800 hidden sm:inline">{currentUser.name}</span>
                </div>
                 <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                    {navItems.map(item => (
                         <button key={item.id} onClick={() => { setCurrentView(item.id); setSelectedIntervention(null); }} className={`flex items-center gap-2 px-2 sm:px-3 py-2 text-sm font-semibold rounded-md whitespace-nowrap transition-colors ${currentView === item.id ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                            {item.icon}
                            <span className="hidden md:inline">{item.label}</span>
                         </button>
                    ))}
                    <button onClick={handleLogout} className="p-2 text-slate-500 hover:text-red-600 rounded-full hover:bg-slate-100"><LogOutIcon /></button>
                </nav>
            </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {currentUser.isAdmin ? (
            <AdminMasterView 
                users={users} 
                interventions={interventions} 
                leaveRequests={leaveRequests} 
                payslips={payslips}
                currentUser={currentUser}
                onAddIntervention={handleAddIntervention}
                onUpdateLeaveStatus={handleUpdateLeaveStatus}
                onAddUser={handleAddUser}
                onUpdateUser={handleUpdateUser}
                onDeleteUser={handleDeleteUser}
                onAddPayslip={handleAddPayslip}
                onArchiveIntervention={handleArchiveIntervention}
                onDeleteIntervention={handleDeleteIntervention}
                onEditIntervention={setEditingIntervention}
                showToast={showToast}
            />
        ) : (
            <>
              {selectedIntervention ? (
                 <EmployeeInterventionDetailView 
                    intervention={selectedIntervention}
                    onBack={() => setSelectedIntervention(null)}
                    onUpdateReport={handleUpdateInterventionReport}
                    onUpdateIntervention={handleUpdateIntervention}
                    currentUser={currentUser}
                 />
              ) : (
                <>
                  {currentView === 'planning' && <EmployeePlanningView interventions={interventions.filter(i => i.userId === currentUser.id && !i.isArchived)} onSelectIntervention={setSelectedIntervention} currentUser={currentUser} />}
                  {currentView === 'leaves' && <EmployeeLeaveView leaveRequests={leaveRequests.filter(r => r.userId === currentUser.id)} onSubmitRequest={handleAddLeaveRequest} userName={currentUser.name} showToast={showToast} />}
                  {currentView === 'vault' && <CoffreNumeriqueView payslips={payslips[currentUser.id] || []} />}
                </>
              )}
            </>
        )}
      </main>
    </div>
  );
}

export default App;
