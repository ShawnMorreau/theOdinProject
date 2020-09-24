-- 1. Show the population of Germany
-- This is a basic SELECT query using the column name and a WHERE condition
SELECT population FROM world
    WHERE name = 'Germany';

-- 2. Show the name and the population for 'Sweden','Norway' and 'Denmark'
SELECT name, population FROM world
    WHERE name IN ('Sweden','Norway','Denmark');

-- 3. Utilize BETWEEN ... AND to show countries with an area between 200k-250k
SELECT name, area FROM world
    WHERE area BETWEEN 200000 and 250000;

