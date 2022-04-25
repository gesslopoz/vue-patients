<template>
  <div>
      <h1>List of Patients</h1>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <h4>Patient Entry</h4>
              <form @submit.prevent="addPatient()">
                  <div class="mb-3">
                      <label for="lastname">Last Name</label>
                      <input type="text" v-model="patient.lastname" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="firstname">First Name</label>
                      <input type="text" v-model="patient.firstname" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="address">Address</label>
                      <input type="text" v-model="patient.address" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="disease">Disease</label>
                      <input type="text" v-model="patient.disease" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-primary">Save Patient</button>
              </form>
          </div>
          <div class="col-md-9">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Disease</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ptnt in patients" :key="ptnt.id">
                        <td>{{ptnt.last_name}}</td>
                        <td>{{ptnt.first_name}}</td>
                        <td>{{ptnt.address}}</td>
                        <td>{{ptnt.disease}}</td>
                        <td>
                            <router-link :to="{name: 'ViewPatient', params: {id: ptnt.id}}" class="btn btn-secondary btn-sm">
                                Open
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            patient: {
                id:null,
                last_name: '',
                first_name: '',
                address: '',
                disease: ''
            },
            patients: []
        }
    },
    methods: {
        addPatient() {
            
            },
            getData(){
                fetch('http://localhost:8000/api/patients')
                .then(res=>res.json())
                .then(data=> this.patients = data)
                .catch(err=>console.log(err))
            }
        },
        mounted() {
            this.getData();
        }
}
</script>

<style>

</style>