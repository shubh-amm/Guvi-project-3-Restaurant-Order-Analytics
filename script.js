// Register the datalabels plugin globally
Chart.register(ChartDataLabels);

const orders = [
    // Sample data for a restaurant
    { id: 1, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-20T19:30:00', day_of_week: 'Monday', customer_type: 'Dine-In', price: 15.50 },
    { id: 2, dish_name: 'Caesar Salad', order_time: '2024-05-20T12:15:00', day_of_week: 'Monday', customer_type: 'Takeout', price: 12.00 },
    { id: 3, dish_name: 'Margherita Pizza', order_time: '2024-05-20T20:05:00', day_of_week: 'Monday', customer_type: 'Delivery', price: 14.00 },
    { id: 4, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-21T19:45:00', day_of_week: 'Tuesday', customer_type: 'Dine-In', price: 15.50 },
    { id: 5, dish_name: 'Chicken Wings', order_time: '2024-05-21T13:00:00', day_of_week: 'Tuesday', customer_type: 'Dine-In', price: 10.00 },
    { id: 6, dish_name: 'Caesar Salad', order_time: '2024-05-22T12:30:00', day_of_week: 'Wednesday', customer_type: 'Delivery', price: 12.00 },
    { id: 7, dish_name: 'Margherita Pizza', order_time: '2024-05-22T21:10:00', day_of_week: 'Wednesday', customer_type: 'Takeout', price: 14.00 },
    { id: 8, dish_name: 'Cheeseburger', order_time: '2024-05-22T19:00:00', day_of_week: 'Wednesday', customer_type: 'Dine-In', price: 13.50 },
    { id: 9, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-23T18:50:00', day_of_week: 'Thursday', customer_type: 'Dine-In', price: 15.50 },
    { id: 10, dish_name: 'Caesar Salad', order_time: '2024-05-23T12:45:00', day_of_week: 'Thursday', customer_type: 'Takeout', price: 12.00 },
    { id: 11, dish_name: 'Margherita Pizza', order_time: '2024-05-24T20:30:00', day_of_week: 'Friday', customer_type: 'Delivery', price: 14.00 },
    { id: 12, dish_name: 'Cheeseburger', order_time: '2024-05-24T19:15:00', day_of_week: 'Friday', customer_type: 'Takeout', price: 13.50 },
    { id: 13, dish_name: 'Chicken Wings', order_time: '2024-05-24T21:20:00', day_of_week: 'Friday', customer_type: 'Dine-In', price: 10.00 },
    { id: 14, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-25T19:55:00', day_of_week: 'Saturday', customer_type: 'Dine-In', price: 15.50 },
    { id: 15, dish_name: 'Margherita Pizza', order_time: '2024-05-25T20:45:00', day_of_week: 'Saturday', customer_type: 'Delivery', price: 14.00 },
    { id: 16, dish_name: 'Cheeseburger', order_time: '2024-05-25T13:30:00', day_of_week: 'Saturday', customer_type: 'Dine-In', price: 13.50 },
    { id: 17, dish_name: 'Chicken Wings', order_time: '2024-05-26T14:00:00', day_of_week: 'Sunday', customer_type: 'Takeout', price: 10.00 },
    { id: 18, dish_name: 'Caesar Salad', order_time: '2024-05-26T12:05:00', day_of_week: 'Sunday', customer_type: 'Dine-In', price: 12.00 },
    { id: 19, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-26T19:25:00', day_of_week: 'Sunday', customer_type: 'Dine-In', price: 15.50 },
    { id: 20, dish_name: 'Margherita Pizza', order_time: '2024-05-26T20:50:00', day_of_week: 'Sunday', customer_type: 'Delivery', price: 14.00 },
    { id: 21, dish_name: 'Cheeseburger', order_time: '2024-05-26T19:10:00', day_of_week: 'Sunday', customer_type: 'Takeout', price: 13.50 },
    { id: 22, dish_name: 'Chicken Wings', order_time: '2024-05-27T13:10:00', day_of_week: 'Monday', customer_type: 'Dine-In', price: 10.00 },
    { id: 23, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-27T20:15:00', day_of_week: 'Monday', customer_type: 'Dine-In', price: 15.50 },
    { id: 24, dish_name: 'Margherita Pizza', order_time: '2024-05-28T19:30:00', day_of_week: 'Tuesday', customer_type: 'Delivery', price: 14.00 },
    { id: 25, dish_name: 'Caesar Salad', order_time: '2024-05-28T12:55:00', day_of_week: 'Tuesday', customer_type: 'Takeout', price: 12.00 },
    { id: 26, dish_name: 'Chicken Wings', order_time: '2024-05-28T21:00:00', day_of_week: 'Tuesday', customer_type: 'Dine-In', price: 10.00 },
    { id: 27, dish_name: 'Cheeseburger', order_time: '2024-05-29T18:40:00', day_of_week: 'Wednesday', customer_type: 'Dine-In', price: 13.50 },
    { id: 28, dish_name: 'Spaghetti Bolognese', order_time: '2024-05-29T20:20:00', day_of_week: 'Wednesday', customer_type: 'Dine-In', price: 15.50 },
    { id: 29, dish_name: 'Margherita Pizza', order_time: '2024-05-30T19:50:00', day_of_week: 'Thursday', customer_type: 'Delivery', price: 14.00 },
    { id: 30, dish_name: 'Caesar Salad', order_time: '2024-05-30T12:00:00', day_of_week: 'Thursday', customer_type: 'Takeout', price: 12.00 },
    { id: 31, dish_name: 'Cheeseburger', order_time: '2024-05-31T19:40:00', day_of_week: 'Friday', customer_type: 'Takeout', price: 13.50 },
    { id: 32, dish_name: 'Chicken Wings', order_time: '2024-05-31T21:30:00', day_of_week: 'Friday', customer_type: 'Dine-In', price: 10.00 },
    { id: 33, dish_name: 'Spaghetti Bolognese', order_time: '2024-06-01T19:00:00', day_of_week: 'Saturday', customer_type: 'Dine-In', price: 15.50 },
    { id: 34, dish_name: 'Margherita Pizza', order_time: '2024-06-01T20:00:00', day_of_week: 'Saturday', customer_type: 'Delivery', price: 14.00 },
    { id: 35, dish_name: 'Caesar Salad', order_time: '2024-06-01T12:10:00', day_of_week: 'Saturday', customer_type: 'Takeout', price: 12.00 },
    { id: 36, dish_name: 'Chicken Wings', order_time: '2024-06-02T13:45:00', day_of_week: 'Sunday', customer_type: 'Dine-In', price: 10.00 },
    { id: 37, dish_name: 'Cheeseburger', order_time: '2024-06-02T19:35:00', day_of_week: 'Sunday', customer_type: 'Delivery', price: 13.50 },
    { id: 38, dish_name: 'Spaghetti Bolognese', order_time: '2024-06-02T20:20:00', day_of_week: 'Sunday', customer_type: 'Dine-In', price: 15.50 },
    { id: 39, dish_name: 'Margherita Pizza', order_time: '2024-06-02T21:10:00', day_of_week: 'Sunday', customer_type: 'Takeout', price: 14.00 },
];

let dishesChart, patternsChart;

const dayFilter = document.getElementById('dayFilter');
const customerFilter = document.getElementById('customerFilter');

function getMealTime(hour) {
    if (hour >= 6 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 17) return 'Afternoon';
    if (hour >= 17 && hour < 21) return 'Evening';
    return 'Late Night';
}

function processData() {
    const selectedDay = dayFilter.value;
    const selectedCustomerType = customerFilter.value;

    // Filter orders based on selections
    const filteredOrders = orders.filter(order => {
        const dayMatch = selectedDay === 'all' || order.day_of_week === selectedDay;
        const customerMatch = selectedCustomerType === 'all' || order.customer_type === selectedCustomerType;
        return dayMatch && customerMatch;
    });

    // Analyze dishes
    const dishCounts = {};
    filteredOrders.forEach(order => {
        dishCounts[order.dish_name] = (dishCounts[order.dish_name] || 0) + 1;
    });

    const sortedDishes = Object.entries(dishCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5); // Get top 5 dishes

    const dishLabels = sortedDishes.map(([dish]) => dish);
    const dishData = sortedDishes.map(([, count]) => count);

    // Analyze meal patterns
    const mealTimeCounts = { 'Morning': 0, 'Afternoon': 0, 'Evening': 0, 'Late Night': 0 };
    filteredOrders.forEach(order => {
        const hour = new Date(order.order_time).getHours();
        const mealTime = getMealTime(hour);
        mealTimeCounts[mealTime] += 1;
    });

    const mealTimeLabels = Object.keys(mealTimeCounts);
    const mealTimeData = Object.values(mealTimeCounts);

    updateCharts(dishLabels, dishData, mealTimeLabels, mealTimeData);
}

function updateCharts(dishLabels, dishData, mealTimeLabels, mealTimeData) {
    const chartColors = ['#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'];

    // Update Dishes Chart (now a Doughnut Chart)
    if (dishesChart) dishesChart.destroy();
    const dishesCtx = document.getElementById('dishesChart').getContext('2d');
    dishesChart = new Chart(dishesCtx, {
        type: 'doughnut',
        data: {
            labels: dishLabels,
            datasets: [{
                data: dishData,
                backgroundColor: chartColors,
                hoverOffset: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 20,
                    }
                },
                datalabels: {
                    color: '#fff',
                    formatter: (value, ctx) => {
                        const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = (value * 100 / sum).toFixed(0);
                        return percentage > 0 ? `${percentage}%` : '';
                    },
                    font: {
                        weight: 'bold',
                        size: 14,
                    }
                }
            }
        }
    });

    // Update Meal Patterns Chart
    if (patternsChart) patternsChart.destroy();
    const patternsCtx = document.getElementById('patternsChart').getContext('2d');
    patternsChart = new Chart(patternsCtx, {
        type: 'bar',
        data: {
            labels: mealTimeLabels,
            datasets: [{
                label: 'Number of Orders',
                data: mealTimeData,
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 1,
                borderRadius: 10,
                hoverBackgroundColor: chartColors[1],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e5e7eb',
                    },
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: '#6b7280',
                    formatter: (value) => value > 0 ? value : '',
                }
            }
        }
    });
}

// Event listeners for filters
dayFilter.addEventListener('change', processData);
customerFilter.addEventListener('change', processData);

// Initial chart render
window.onload = () => {
    processData();
};