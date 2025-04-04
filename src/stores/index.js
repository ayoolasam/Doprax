
import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({ 
    serviceName: "",
    description: "",
    region: "",
    instanceType: "",
    resources: {
      vCPU: null,
      memory: null,
      storage: null,
    },
    network: {
      vpc: "",
      subnet: "",
      publicIp: null,
    },
    securityGroups: [],
    usersServices:[] 
  }),

  actions: {
    setServiceName(name) {
      this.serviceName = name;
    },
    setDescription(desc) {
      this.description = desc;
    },
    setRegion(region) {
      this.region = region;
    },
    setInstanceType(type) {
      this.instanceType = type;
    },
    updateResources(resources) {
      this.resources = { ...this.resources, ...resources };
    },
    updateNetwork(network) {
      this.network = { ...this.network, ...network };
    },
    setSecurityGroups(groups) {
      this.securityGroups = groups;
    },
  },
  persist:true,
})