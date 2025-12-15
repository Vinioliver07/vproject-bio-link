import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  primary?: boolean;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  mobileImageUrl?: string;
  url?: string;
}