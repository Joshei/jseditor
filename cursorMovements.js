//controls cursor movement changes and crosses over borders
class CursorMovementsClass {
    cursorRight() {
      
      if(horizontalCursorPosition/5 >= WIDTH-1  && verticalCursorPosition/10 >= HEIGHT-1)
      {
        return
      }
      if (horizontalCursorPosition >= (WIDTH-1)*5){
        horizontalCursorPosition = 0
        verticalCursorPosition = verticalCursorPosition + 10
      }else{
        horizontalCursorPosition = horizontalCursorPosition + 5
      }
      
    }
    cursorLeft() {
      if(horizontalCursorPosition/5 <= 0 && verticalCursorPosition/10 <= 0)
      {
        return
      }
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = (WIDTH-1)*5
        verticalCursorPosition = verticalCursorPosition - 10
        
        
      }
      else{
        horizontalCursorPosition = horizontalCursorPosition - 5
      }
      
    }
    cursorUp() {
      if (verticalCursorPosition <= 0) {
        verticalCursorPosition = 0
        return -3
      }
      
      verticalCursorPosition = verticalCursorPosition - 10
      
    }
    cursorDown() {
      if (verticalCursorPosition  >= (HEIGHT-1)*10) {
      verticalCursorPosition = (HEIGHT-1)*10
        return -4
      }
    
      if(verticalCursorPosition/10 == (HEIGHT-2)){
        verticalCursorPosition = verticalCursorPosition + 10
      }
      else{
        verticalCursorPosition = verticalCursorPosition + 20
      }
    }
  }

  