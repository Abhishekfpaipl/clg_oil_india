<template>
    <div class="container">
        <h5 class="mb-4">Physico-chemical properties:</h5>  
        <table class="table table-striped mb-5">
            <thead class="table-secondary">
                <tr>
                    <th>#</th>
                    <th>Appearance</th> 
                    <th>Lorem </th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="(flight, index) in delhiFlights" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ flight.airline }}</td> 
                    <td>{{ flight.departure }}</td> 
                </tr>
            </tbody>
        </table>
 
    </div>
</template>

<script>
export default {
    data() {
        return {
            delhiFlights: [
                { airline: 'NLGI Grade',  departure: '1 /2/3',   },
                { airline: 'Base Oil Type',  departure: 'Mineral',  },
                { airline: 'Base Oil Viscosity at 40oC',  departure: '100 min',  },
                { airline: 'Thickener Type',  departure: 'Unique thickener chemistry',  },
                { airline: 'Dropping Point',  departure: '175 min',  },
                { airline: 'EP & AW Properties',  departure: 'Yes ( EP or Non EP)',  },
                { airline: 'Operating Temperature',  departure: '-20 to 120C',  },
            ], 
        };
    },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>