import {
  BookOpen, Cpu, Microscope, Search, Monitor, TrendingUp,
  Calculator, Wrench, Shield, GitBranch, Server, Layers,
  AlertTriangle, AlertOctagon, FileSearch, Clock, Settings,
  MemoryStick, HardDrive, Activity, Users, FileText, Network,
  Database, Zap, Table, Trash2, Terminal, Lock, Ghost, Package,
  Cloud, Bot, Brain, BarChart, MessageSquare, Rocket, Atom,
  Wifi, Radio, Car, Globe, Sparkles, Eye, Link, Flag,
  CheckCircle, Scale, UserCheck, BookMarked, Award, Fingerprint,
  ArrowLeftRight, Dna, Scroll, Crosshair, Telescope, Lightbulb,
  ArrowRight, ChevronLeft, ChevronRight, Home, HelpCircle,
  BookCheck, X, Check, Info, GraduationCap, Menu,
  RotateCcw, Star, Footprints, Layers3, ShieldCheck,
} from 'lucide-react';

const iconMap = {
  BookOpen, Cpu, Microscope, Search, Monitor, TrendingUp,
  Calculator, Wrench, Shield, GitBranch, Server, Layers,
  AlertTriangle, AlertOctagon, FileSearch, Clock, Settings,
  MemoryStick, HardDrive, Activity, Users, FileText, Network,
  Database, Zap, Table, Trash2, Terminal, Lock, Ghost, Package,
  Cloud, Bot, Brain, BarChart, MessageSquare, Rocket, Atom,
  Wifi, Radio, Car, Globe, Sparkles, Eye, Link, Flag,
  CheckCircle, Scale, UserCheck, BookMarked, Award, Fingerprint,
  ArrowLeftRight, Dna, Scroll, Crosshair, Telescope, Lightbulb,
  ArrowRight, ChevronLeft, ChevronRight, Home, HelpCircle,
  BookCheck, X, Check, Info, GraduationCap, Menu,
  RotateCcw, Star, Footprints, Layers3, ShieldCheck,
};

export function Icon({ name, size = 24, className = '' }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}

export const colorMap = {
  green: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    dot: 'bg-emerald-400',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-900/40 text-emerald-400 border-emerald-500/40',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-400',
    glow: 'shadow-cyan-500/20',
    badge: 'bg-cyan-900/40 text-cyan-400 border-cyan-500/40',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    dot: 'bg-blue-400',
    glow: 'shadow-blue-500/20',
    badge: 'bg-blue-900/40 text-blue-400 border-blue-500/40',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    dot: 'bg-purple-400',
    glow: 'shadow-purple-500/20',
    badge: 'bg-purple-900/40 text-purple-400 border-purple-500/40',
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    dot: 'bg-orange-400',
    glow: 'shadow-orange-500/20',
    badge: 'bg-orange-900/40 text-orange-400 border-orange-500/40',
  },
  violet: {
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    dot: 'bg-violet-400',
    glow: 'shadow-violet-500/20',
    badge: 'bg-violet-900/40 text-violet-400 border-violet-500/40',
  },
  yellow: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    dot: 'bg-yellow-400',
    glow: 'shadow-yellow-500/20',
    badge: 'bg-yellow-900/40 text-yellow-400 border-yellow-500/40',
  },
  red: {
    text: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    dot: 'bg-red-400',
    glow: 'shadow-red-500/20',
    badge: 'bg-red-900/40 text-red-400 border-red-500/40',
  },
  gray: {
    text: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    dot: 'bg-slate-400',
    glow: 'shadow-slate-500/20',
    badge: 'bg-slate-900/40 text-slate-400 border-slate-500/40',
  },
};
