const mapping: Record<string, string> = {
  appointments: 'appointment',
  billings: 'billing',
  organizations: 'organization',
  'patient-records': 'patient_record',
  schedules: 'schedule',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
