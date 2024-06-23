const mqtt= require('mqtt')

const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

const  topic ="JPLearning_SensorData";


client.on('connect' ,async() => {
    console.log('MQTT connected');

    client.subscribe(topic);
})

client.on('message' ,async(topic,message) => {
    console.log('MQTT Recieved Topic' ,topic, ' ' ,'mesaage:' , message.toString());
})