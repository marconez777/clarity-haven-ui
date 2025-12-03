import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Clock } from 'lucide-react';

interface SessionTimeoutWarningProps {
  open: boolean;
  remainingSeconds: number;
  onContinue: () => void;
}

export const SessionTimeoutWarning = ({
  open,
  remainingSeconds,
  onContinue,
}: SessionTimeoutWarningProps) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            <AlertDialogTitle>Sessão expirando</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="space-y-2">
            <p>
              Sua sessão expirará em <strong>{timeDisplay}</strong> devido à inatividade.
            </p>
            <p>
              Clique em "Continuar" para manter sua sessão ativa.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onContinue}>
            Continuar sessão
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
