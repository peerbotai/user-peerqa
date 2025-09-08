#!/usr/bin/env node

const testData = {
  name: "JSON Mode Test",
  version: "1.0.0",
  timestamp: new Date().toISOString(),
  features: ["parsing", "validation", "formatting"],
  config: {
    mode: "test",
    debug: true,
    maxRetries: 3
  }
};

console.log("=== JSON Mode Test ===");
console.log("Original object:", testData);
console.log("\n=== JSON Stringify ===");
const jsonString = JSON.stringify(testData, null, 2);
console.log(jsonString);

console.log("\n=== JSON Parse ===");
try {
  const parsed = JSON.parse(jsonString);
  console.log("Parsed successfully:", parsed);
  
  console.log("\n=== Validation ===");
  console.log("Name:", parsed.name);
  console.log("Features count:", parsed.features.length);
  console.log("Debug mode:", parsed.config.debug);
  
  console.log("\n✅ JSON mode working correctly!");
} catch (error) {
  console.error("❌ JSON parsing failed:", error.message);
}