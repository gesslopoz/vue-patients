<template>
  <h1>Patient Details</h1>
  <hr>
  <div class="row">
      <div class="col-md-4">
          <table class="table table-striped">
              <tr>
                  <th>ID</th><td>{{patient.id}}</td>
              </tr>
               <tr>
                  <th>Last Name</th><td>{{patient.last_name}}</td>
              </tr>
               <tr>
                  <th>First Name</th><td>{{patient.first_name}}</td>
              </tr>
               <tr>
                  <th>Address</th><td>{{patient.address}}</td>
              </tr>
              <tr>
                  <th>Disease</th><td>{{patient.disease}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            patient: {}
        }
    }, 
    mounted(){
        fetch('http://localhost:8000/api/patients/' + this.id)
        .then(res => res.json())
        .then(data => this.patient = data)
        .then(err => console.log(err))
    }
}
</script>

<style>

</style>