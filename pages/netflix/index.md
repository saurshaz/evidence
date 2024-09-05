---
queries:
  - all_content: omdbdata/all_content.sql
---
<!-- 
```all_content
select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM ${all_teams} R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC
```

```nfc_conf
select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM ${all_teams} R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC
``` -->

# All content
## OMDB Content

 <DataTable data={all_content} link=team_link rows=16 rowShading="true">
  <Column id=seed/>
  <Column id=team/>
  <Column id=record/>
  <Column id=elo_rating_num0/>
  <Column id=avg_wins_num1/>
  <Column id=make_playoffs_pct1/>
</DataTable>

## National Football Conference

 <DataTable data={nfc_conf} link=team_link rows=16 rowShading="true">
  <Column id=seed/>
  <Column id=team/>
  <Column id=record/>
  <Column id=elo_rating_num0/>
  <Column id=avg_wins_num1/>
  <Column id=make_playoffs_pct1/>
</DataTable>