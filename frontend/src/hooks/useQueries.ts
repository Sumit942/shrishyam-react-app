import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Service, Industry, CompanyInfo } from '../backend';

export function useServices() {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIndustries() {
  const { actor, isFetching } = useActor();

  return useQuery<Industry[]>({
    queryKey: ['industries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getIndustries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCompanyInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<CompanyInfo>({
    queryKey: ['companyInfo'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getCompanyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceInterested: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceInterested
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    },
  });
}
