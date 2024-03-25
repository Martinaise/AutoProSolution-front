import axios from "axios"
import { adminInstance, instance } from "../axios"

// fetching allServices
export async function getServices() {
    const data = instance.get("/services")
    return data
}

//fonction pour créer tous les services
export async function createService(service) {
    const data = adminInstance.post("/service",service)
    return data
}
//fonction pour récupérer un seul service
export async function getOneService(id) {
    const data = adminInstance.get(`/service/${id}`)
    return data
}

//fonction pour mettre à jour un seul service
export async function putOneService(id,service) {
    const data = adminInstance.put(`/service/${id}`,service)
    return data
}

//fonction pour supprimer  un seul service
export async function deleteOneService(id) {
    const data = adminInstance.delete(`/service/${id}`,)
    return data
}