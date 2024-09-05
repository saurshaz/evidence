SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id