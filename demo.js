POST /api/tournament/create-tournament

{
    "tournament_name": "Championship League",
    "creator_name": "Deepak"
  }

  

  POST /api/tournament/create-room

  {
    "tournament_id": "66e2cedc2d45db4bbfcc8c6c",
    "room_id": "Room101"
  }
  


  POST /api/tournament/join-room

  {
    "tournament_id": "66e2cedc2d45db4bbfcc8c6c",
    "room_id": "Room101",
    "player_name": "Rahul"
  }
  

  POST /api/tournament/save-score

  {
    "tournament_id": "66e2cedc2d45db4bbfcc8c6c",
    "room_id": "Room101",
    "player_name": "Rahul",
    "score": 90
  }



  POST /api/tournament/determine-winner

  {
    "tournament_id": "66e2cedc2d45db4bbfcc8c6c",
    "room_id": "Room101"
  }
  
  
