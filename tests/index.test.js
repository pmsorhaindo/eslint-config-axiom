"use strict"

const fs = require("fs");
const CLIEngine = require("eslint").CLIEngine;

describe('eslint', () => {
  let results;
  let cli;

  describe("flags no warnings with valid css", () => {
    beforeEach(() => {
      cli = new CLIEngine({ 
        useEslintrc: false,
        configFile: 'index.js',
      });
      results = cli.executeOnFiles(['./tests/valid.js']);
    });

    it("did not error", () => {
      expect(results.errorCount).toBe(0);
    });

    it("flags no warnings", () => {
      expect(results.warningCount).toBe(0);
    });
  });

  describe("flags warnings with invalid js", () => {
    let results;
    let report;

    beforeEach(() => {
      cli = new CLIEngine({ 
        useEslintrc: false,
        configFile: 'index.js',
      });
      results = cli.executeOnFiles(['./tests/invalid.js']);
    });

    it("did error", () => {
      expect(results.errorCount).toBe(4);
    });

    it("flags one warning", () => {
      expect(results.warningCount).toBe(0);
    });
  });
});

