-- 1. Modify it to show the matchid and player name for all goals scored by Germany
SELECT goal.matchid, player FROM goal 
  WHERE teamid = 'GER';

-- 2. Show id, stadium, team1, team2 for just game 1012
SELECT id,stadium,team1,team2 FROM game
    WHERE id = 1012;

-- 3. Modify it to show the player, teamid, stadium and mdate for every German goal.
SELECT player, teamid, stadium, mdate FROM game 
JOIN goal 
ON (game.id=goal.matchid)
WHERE goal.teamid = 'GER';

-- 4. Show the team1, team2 and player for every goal scored by a player called Mario
SELECT team1, team2, player FROM goal
JOIN game
ON game.id = goal.matchid
WHERE goal.player LIKE 'Mario %';

-- 5. Show player, teamid, coach, gtime for all goals scored in the first 10 minutes
SELECT player, teamid, coach, gtime FROM goal
JOIN eteam
ON eteam.id = goal.teamid
WHERE gtime<=10;

-- 6. List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.
SELECT mdate, teamname FROM game
JOIN eteam
ON game.team1 = eteam.id
WHERE coach = 'Fernando Santos';

-- 7.List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'
SELECT player FROM goal
JOIN game
ON game.id = goal.matchid
WHERE stadium = 'National Stadium, Warsaw';
-- 8. Instead show the name of all players who scored a goal against Germany.
SELECT DISTINCT player FROM goal
JOIN game
ON game.id = goal.matchid
WHERE goal.teamid != 'GER' AND (team1 = 'GER' OR team2 = 'GER');
-- 9. Show teamname and the total number of goals scored.
SELECT teamname, COUNT(*) AS goals_scored FROM eteam
JOIN goal 
ON goal.teamid = eteam.id
GROUP BY eteam.teamname, goal.teamid;

-- 10. Show the stadium and the number of goals scored in each stadium.
SELECT game.stadium, COUNT(*) AS no_goals FROM goal
JOIN game
ON game.id = goal.matchid
GROUP BY stadium;

-- 11. For every match involving 'POL', show the matchid, date and the number of goals scored.
SELECT goal.matchid, game.mdate, COUNT(*) AS no_goals FROM goal
JOIN game
ON goal.matchid = game.id
GROUP BY teamid;
WHERE team1 = 'POL' OR team2 = 'POL';
-- 12. For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'
SELECT goal.matchid, game.mdate, COUNT(*) AS no_goals FROM goal
JOIN game
ON goal.matchid = game.id
GROUP BY goal.matchid,game.mdate,game.team1, game.team2
HAVING game.team1 = 'POL' OR game.team2 = 'POL';
-- 13. List every match with the goals scored by each team as shown
SELECT mdate, 
    team1, SUM(CASE WHEN goal.teamid=team1 THEN 1 ELSE 0 END) AS score1, 
    team2, SUM(CASE WHEN goal.teamid=team2 THEN 1 ELSE 0 END) AS score2
FROM goal
LEFT JOIN game
ON game.id = goal.matchid
GROUP BY mdate,matchid, team1, team2
ORDER BY mdate