import { useTranslations } from 'next-intl';
import type { BusinessUnit } from "@/types";

export function useBusinessUnits(): BusinessUnit[] {
  const t = useTranslations('businessUnits');

  return [
    {
      id: "pgi-property",
      name: t('property.name'),
      tagline: t('property.tagline'),
      description: t('property.description'),
      services: [
        t('property.services.management'),
        t('property.services.tenantRelations'),
        t('property.services.maintenance'),
        t('property.services.assetManagement'),
        t('property.services.leaseAdmin'),
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", // REPLACE: Property management building
      icon: "Building2",
    },
    {
      id: "pgi-contractor",
      name: t('contractor.name'),
      tagline: t('contractor.tagline'),
      description: t('contractor.description'),
      services: [
        t('contractor.services.commercial'),
        t('contractor.services.residential'),
        t('contractor.services.renovation'),
        t('contractor.services.projectManagement'),
        t('contractor.services.designBuild'),
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop", // REPLACE: Construction site
      icon: "HardHat",
    },
    {
      id: "pgi-machinery",
      name: t('machinery.name'),
      tagline: t('machinery.tagline'),
      description: t('machinery.description'),
      services: [
        t('machinery.services.equipmentRental'),
        t('machinery.services.craneServices'),
        t('machinery.services.excavatorRental'),
        t('machinery.services.equipmentMaintenance'),
        t('machinery.services.operatorServices'),
      ],
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop", // REPLACE: Heavy machinery/excavator
      icon: "Cog",
    },
    {
      id: "pgi-developer",
      name: t('developer.name'),
      tagline: t('developer.tagline'),
      description: t('developer.description'),
      services: [
        t('developer.services.residential'),
        t('developer.services.commercial'),
        t('developer.services.mixedUse'),
        t('developer.services.landAcquisition'),
        t('developer.services.investmentAnalysis'),
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", // REPLACE: Modern development/luxury building
      icon: "Building",
    },
  ];
}

export function getBusinessUnit(id: string, businessUnits: BusinessUnit[]): BusinessUnit | undefined {
  return businessUnits.find((unit) => unit.id === id);
}
