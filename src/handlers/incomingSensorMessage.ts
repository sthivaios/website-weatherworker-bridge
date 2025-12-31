import { postReading } from "../helpers/postReading.js";

interface MqttMessage {
  metadata: {
    timestamp: number;
    device: string;
  };
  readout: {
    value: number;
    sensor: string;
    unit: string;
    address?: string;
  };
}

export async function handleIncomingSensorMessage(message: MqttMessage) {
  const timestamp = new Date(message.metadata.timestamp * 1000);

  const readingToPost = {
    sensor: message.readout.sensor,
    value: message.readout.value,
    timestamp: new Date(timestamp).toString(),
  };

  await postReading(readingToPost);
}
