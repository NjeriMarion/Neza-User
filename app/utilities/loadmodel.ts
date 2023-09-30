import joblib from 'joblib';

const MODEL_FILE_PATH = 'models/neza_model.pkl';

export const loadModel = async () => {
  try {
    const model = await joblib.load(MODEL_FILE_PATH);
    return model;
  } catch (error) {
    console.error('Error loading the model:', error);
    throw error;
  }
};
