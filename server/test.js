import fetch from 'node-fetch';

async function testServer() {
  try {
    console.log('Testing root endpoint...');
    const rootResponse = await fetch('http://localhost:3001/');
    const rootText = await rootResponse.text();
    console.log('Root response:', rootText);

    console.log('\nTesting /api/test endpoint...');
    const testResponse = await fetch('http://localhost:3001/api/test');
    const testJson = await testResponse.json();
    console.log('Test response:', testJson);
  } catch (error) {
    console.error('Error testing server:', error);
  }
}

testServer(); 