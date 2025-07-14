import { HardHat, Clock } from "lucide-react";

export default function PageUnderConstruction() {
  return (
    <div className="min-h-screen  flex  items-center justify-center bg-base-100 text-center px-4">
      <div className="max-w-md space-y-4">
        <div className="text-warning">
          <HardHat className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold">Page en cours de développement</h1>
        <p className="text-base-content">
          Cette fonctionnalité est actuellement en construction. Nous travaillons dur pour la rendre disponible bientôt.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-base-content">
          <Clock className="w-4 h-4" />
          <span>Merci de votre patience.</span>
        </div>
      </div>
    </div>
  );
}
