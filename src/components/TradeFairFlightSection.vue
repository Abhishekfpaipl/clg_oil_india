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
                { airline: 'SQ 403',  departure: 'DEL 21:55',   },
                { airline: 'SQ 828',  departure: 'SIN 07:55',  },
                { airline: 'SQ 835',  departure: 'PVG 19:10',  },
                { airline: 'SQ 402',  departure: 'SIN 02:35',  },
            ],
            mumbaiFlights: [
                { airline: 'SQ 423', date: '17-09-2024', departure: 'BOM 23:40', arrival: 'SIN 07:40+1' },
                { airline: 'SQ 830', date: '18-09-2024', departure: 'SIN 09:30', arrival: 'PVG 15:05' },
                { airline: 'SQ 825', date: '23-09-2024', departure: 'PVG 00:35', arrival: 'SIN 05:55' },
                { airline: 'SQ 422', date: '23-09-2024', departure: 'SIN 07:40', arrival: 'BOM 13:30' },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>