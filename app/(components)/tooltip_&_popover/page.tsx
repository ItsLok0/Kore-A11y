import type { Metadata } from 'next';
import TooltipPopoverDemo from '@/app/ui/components/Tooltip_Popover/demoTooltipPopover';

export const metadata: Metadata = {
  title: 'Tooltip & Popover',
  description: "Démonstration des composants Tooltip et Popover avec gestion de l'accessibilité.",
};

export default function TooltipPopoverDemoPage() {
  return (
    <TooltipPopoverDemo />
  );
}