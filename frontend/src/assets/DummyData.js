const users = [
  {
    userId: "1",
    username: "John Doe",
    email: "john_doe@example.com",
  },
  {
    userId: "2",
    username: "Jane Smith ",
    email: "jane_smith@example.com",
  },
  {
    userId: "3",
    username: "Alex Johnson",
    email: "alex_johnson@example.com",
  },
  {
    userId: "4",
    username: "Emily Clark",
    email: "emily_clark@example.com",
  },
  {
    userId: "5",
    username: "Michael Brown",
    email: "michael_brown@example.com",
  },
  {
    userId: "6",
    username: "Sophia White",
    email: "sophia_white@example.com",
  },
  {
    userId: "7",
    username: "Thota Veera Venkata Sai Durga Prasad",
    email: "sophia_white@example.com",
  },
];

const responses = [
  {
    responseId: "1005",
    userId: "4",
    query: "What is quantum computing?",
    response: {
      summary:
        "Quantum computing uses quantum mechanics to perform computations.",
      result_text:
        "Quantum computing leverages quantum bits (qubits) that can exist in multiple states simultaneously, allowing for complex problem solving much faster than classical computers.",
      result_table_path: null,
      result_visualization_path:
        "https://example.com/quantum_computing_diagram",
      error: null,
    },
    timestamp: "2024-10-12T14:00:00Z",
  },
  {
    responseId: "1006",
    userId: "5",
    query: "What is the tallest mountain in the world?",
    response: {
      summary: "Mount Everest is the tallest mountain in the world.",
      result_text:
        "Mount Everest, located in the Himalayas, stands at 8,848 meters (29,029 feet) above sea level, making it the tallest mountain on Earth.",
      result_table_path: "https://example.com/tallest_mountains_table",
      result_visualization_path: null,
      error: null,
    },
    timestamp: "2024-10-12T16:30:00Z",
  },
  {
    responseId: "1007",
    userId: "6",
    query: "How does photosynthesis work?",
    response: {
      summary: "Photosynthesis is the process by which plants make food.",
      result_text:
        "In photosynthesis, plants use sunlight, carbon dioxide, and water to produce glucose and oxygen. This process takes place in the chloroplasts within plant cells.",
      result_table_path: null,
      result_visualization_path: "https://example.com/photosynthesis_process",
      error: null,
    },
    timestamp: "2024-10-13T09:45:00Z",
  },
  {
    responseId: "1008",
    userId: "4",
    query: "Explain the difference between AI and Machine Learning.",
    response: {
      summary:
        "AI is a broad concept, while Machine Learning is a subset of AI.",
      result_text:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence by machines. Machine Learning (ML) is a specific application of AI that allows systems to learn and improve from experience without explicit programming.",
      result_table_path: null,
      result_visualization_path: "https://example.com/ai_vs_ml_visual",
      error: null,
    },
    timestamp: "2024-10-13T11:15:00Z",
  },
  {
    responseId: "1009",
    userId: "5",
    query: "What is the speed of light?",
    response: {
      summary: "The speed of light is 299,792 kilometers per second.",
      result_text:
        "In a vacuum, light travels at approximately 299,792 kilometers per second (186,282 miles per second). This speed is a fundamental constant of nature.",
      result_table_path: "https://example.com/light_speed_table",
      result_visualization_path: null,
      error: null,
    },
    timestamp: "2024-10-13T13:30:00Z",
  },
  {
    responseId: "1001",
    userId: "1",
    query: "What is the capital of France?",
    response: {
      summary: "The capital of France is Paris.",
      result_text:
        "Paris is the largest city in France and the political, cultural, and economic hub of the country.",
      result_table_path: null,
      result_visualization_path: null,
      error: null,
    },
    timestamp: "2024-10-10T14:30:00Z",
  },
  {
    responseId: "1002",
    userId: "1",
    query: "What is the population of the USA?",
    response: {
      summary: "The population of the USA is approximately 331 million.",
      result_text:
        "As of 2024, the population of the United States is around 331 million people.",
      result_table_path: "https://example.com/us_population_table",
      result_visualization_path: "https://example.com/us_population_chart",
      error: null,
    },
    timestamp: "2024-10-11T10:00:00Z",
  },
  {
    responseId: "1003",
    userId: "2",
    query: "Explain the theory of relativity.",
    response: {
      summary:
        "Theory of relativity is a key concept in physics, introduced by Albert Einstein.",
      result_text:
        "The theory of relativity encompasses two interrelated theories: special relativity and general relativity. It has transformed our understanding of space, time, and gravity.",
      result_table_path: null,
      result_visualization_path: "https://example.com/relativity_visualization",
      error: null,
    },
    timestamp: "2024-10-12T09:15:00Z",
  },
  {
    responseId: "1004",
    userId: "3",
    query: "What are the benefits of machine learning?",
    response: {
      summary:
        "Machine learning provides automation, pattern recognition, and predictive insights.",
      result_text:
        "By leveraging algorithms, machine learning helps automate tasks, recognize patterns in data, and make accurate predictions across various fields such as healthcare, finance, and more.",
      result_table_path: "https://example.com/ml_benefits_table",
      result_visualization_path: null,
      error: null,
    },
    timestamp: "2024-10-11T12:45:00Z",
  },
];

module.exports = { users, responses };
