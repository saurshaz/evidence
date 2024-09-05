---
queries:
  - past_games: nfl/past_games.sql
  - past_games_summary: nfl/past_games_summary.sql
  - past_games_summary_by_team: nfl/past_games_summary_by_team.sql
---

# Predictions

{#if past_games.length > 0}
## Past Performance

<BigValue 
    data={past_games_summary} 
    value='total_games_played' 
/> 

<BigValue 
    data={past_games_summary} 
    value='correct_predictions' 
/> 

<BigValue 
    data={past_games_summary} 
    value='accuracy_pct1' 
/> 

<Accordion>
  <AccordionItem title="Detailed Results by Team">
    <DataTable
        data={past_games_summary_by_team}
        title='Prediction Accuracy by Team'
        rows=32
    />
  </AccordionItem>
  
  <LineChart 
      data={past_games_summary_by_team}  
      x=team 
      y=accuracy_pct1
      title='past_games_summary_by_team'
      xAxisTitle=TeamName
      xTickMarks=true
      yMax=1
  />
  
  <BigValue 
    data={{"a":123}} 
    value='a' 
  /> 

</Accordion>

{:else}

_The regular season has yet to begin. Check back soon!_

{/if}
