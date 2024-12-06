#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>') // Добавить аргументы для путей к файлам
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format') // Опция для выбора формата
  .action((filepath1, filepath2, options) => {
    if (!filepath1 || !filepath2) {
        console.error('Error: Both filepath1 and filepath2 are required');
        process.exit(1);
      }
    // Здесь вызвать функцию для сравнения файлов
    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    console.log(`Using format: ${options.format || 'default'}`);
    // Вызов функции сравнения
  })
  .parse(process.argv);

export function genDiff(filepath1, filepath2) {
    // Логика для сравнения двух файлов конфигурации
    return 'Functionality not implemented yet';
  };
  

