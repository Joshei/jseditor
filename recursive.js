//pushWordsDoThisSecond, SHOULD BE OKAY, CHECK.  READ CODE TOMORROW.  
//NEXT SESSION, TEST FOR pushWordsDoThisSecond RECURSION, AND THERE IS A DIFFERENT VERSION ON GITHUB TOO
//THIS VERSION FITS THE CODE IN A LOWER LEFT HAND SLOT.
//THE GITHUB VERSION PUSHES TEXT INTO NEXT LINE.
//USE BOTH
//ANY PROBLEMS, USE VERSION: CURSORS.

//8/26/24 (5:22 PM): insert and pushrow looking good.  PushWord next.  React/css tomorrow.
class RecursiveClass {
  constructor() {
  this.counterOfRows = 0
  this.CursorOnLastColumn = false
  this.lastRowIndexToPushOn = -1
  this.checkOnLastLineSoCreateRow = false
  this.bottomRow = -1
  this.bottomRowFromLastRound = []
  this.characterMovedToBottom = ""
}

  deleteRow(arr, rowNumber) 
  {
      arr.splice(rowNumber, 1);
      return arr;
  }


    createRow(grid, rowIndex) {
    //remove last line, which is exclamation marks
    //this.deleteRow(grid, rowIndex+1) 
    //add a new row of nulls
    
    grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
    
    //add exclamation marks at end again, which is for padding
    //grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
    //important, allows new line to display in the drawgrid
    HEIGHT++ 
    drawGrid(HEIGHT, WIDTH)
    return grid
    
  }

  getLastSpaceOrNull(grid ,topRow){

  //get left phrase before last dash
  //checks for either space or dash, whichever is less characters
  let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
  let lastIndexOfSpaceOnTopRow = topRow.lastIndexOf(" ");
  let maxIndexOfNullOrString = 0
  if(lastIndexOfSpaceOnTopRow >= lastIndexOfNullOnTopRow){
    maxIndexOfNullOrString = lastIndexOfSpaceOnTopRow
  }else{
    //choose space or null character that is farthest right on row
    maxIndexOfNullOrString = lastIndexOfNullOnTopRow
  }
  if (maxIndexOfNullOrString === -1){
    return grid
  }
  //gets the word after dash or spacew
  const [left, rightWordAtEndOfRowOne] = this.splitAtIndex(topRow, maxIndexOfNullOrString+1);
  return {leftSide: left, rightSide: rightWordAtEndOfRowOne}
}


placeCharacterWithoutInsertDoThisFirst(rowIndex, colIndex, grid, character){
   grid[rowIndex][colIndex] = character;
   return grid
}
deleteCharacterWithoutPull(rowIndex, colIndex, grid, character){
  grid[rowIndex][colIndex] = "-";
  return grid
}

//ths is for when two letter are entered on last column (pushes to next row)
//THIS IS CALLED TWICE, COULD WORK
//CONSIDER ADPATING CODE INSTAED ; LOOK AT MORE THAN HEIGHT-2 IN pushWordsDoThisSecond
//CAUSES AT LEAST ONE INDEXING ERROR
//READING LENGTH ERROR

//WILL THE LAST LINE ALWAYS BE EMPTY HERE?
lastLineWorkings(grid, rowIndex){

  //no characters on bottom row




  return grid
  let topRow = grid[rowIndex-1];
  let bottomRow =grid[rowIndex];
  let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
  //get top right word
  const [leftOfLeftWordTopRow, rightWordTopRow] = this.splitAtIndex(topRow, lastIndexOfNullOnTopRow+1)
  //get left word for bottom
  const firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
  const [leftWordBottomRow, rightSide] = this.splitAtIndex(bottomRow, firstIndexOfNullOnBottomRow)
  const combine = [...rightWordTopRow, ...leftWordBottomRow]
  grid[rowIndex] = combine
 
  for(let i = combine.length; i < WIDTH; i++ ){
    grid[rowIndex][i] = "A"
   }
   //grid[15][0] = "w"
   return grid
}

//8/13/24
//over border in middle
//right on row end without pushing
//three pushes at one time.+
//top row
//CHECK FULL ROWS/
 
 

// oon last line
  pushWordsDoThisSecond(grid, newRemainder, rowIndex, fromIndex)
  {
    //for putting cursor on row 2 for lefthand words greater than 2
    let TwoOrMoreCharactersAtRightWordAtRowOne = false
    
    if(rowIndex > HEIGHT - 1){
      return grid
    }
    
  
    if(rowIndex === HEIGHT-1 && grid[HEIGHT-1][0] != "-" && grid[HEIGHT-2][WIDTH-1] != "-"){

      //take top right word, save to variable
      //find insertion point
      

    }

    if(rowIndex === HEIGHT-1 && grid[HEIGHT-1][WIDTH-1] != "-"){
      //looking if there is a character of bottom row, if so create a row and continue with push
      if(grid[HEIGHT-1][WIDTH-1] != DASH ){
      this.createRow(grid, rowIndex)
      //grid[rowIndex+1][0] = "A"
      //this.lastLineWorkings(grid, rowIndex)
      //verticalCursorPosition = verticalCursorPosition - 10
      horizontalCursorPosition = horizontalCursorPosition + 5 
      drawGrid(HEIGHT, WIDTH)
      //rowIndex--;
      this.lastLineWorkings(grid, rowIndex)
      //this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
      //return grid
      }
    }
    

     //IF CHARACTER NOT ON END AND BEGINNING EXIT OUT WITH A CALL TO RECURSIVE FUNCTION - LOOK AT QUICKLY

     //if(rowIndex < HEIGHT - 1 && (grid[verticalCursorPosition/10 - 1][WIDTH-1] === "-")){
     //
     // //BREAK OUT, MAYBE
     // return grid
    //}
    // (rowIndex == 0 && grid[rowIndex][WIDTH-1] != "-") && (grid[rowIndex+1][0] != "-") || 
    // (rowIndex != 0  && rowIndex < HEIGHT-1 && (grid[rowIndex][WIDTH-1] != "-") && (grid[rowIndex+1][0] != "-") ||
    // (rowIndex != 0 && (grid[rowIndex-1][WIDTH-1] != "-") && (grid[rowIndex][0] != "-"))  )){
    // //This is for if left hand top word is only one character, all the way to right (pressed twice)
    // //(rowIndex != 0 && fromIndex && (grid[rowIndex][WIDTH-1] != "-") && (grid[rowIndex+1][0] != "-") )
    // //if(rowIndex != 0 && fromIndex && (grid[rowIndex][WIDTH-1] != "-") && (grid[rowIndex+1][0] != "-")  ||
    // if(rowIndex != 0 && fromIndex && (grid[rowIndex-1][WIDTH-1] != "-") && (grid[rowIndex][0] != "-")){
    // //rowIndex = rowIndex - 1;
    // }

    let holdthis = rowIndex+1
    //end base case
    let wasVariablegridCheck = []
    let wordAtEndOfRowOne = []
    let topRow = grid[rowIndex-1];
    let bottomRow =grid[rowIndex];// grid[verticalCursorPosition/10 + 1];
    let characterCounter = 0
    


    //!!!!!!!!!!!!HERE!!!!!!!!!

    //CHECK FOR AFTER CREATE ROW AND SETTINGS
    if((rowIndex > HEIGHT-1) || (rowIndex == 0)){
      this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
        return grid
    }
    
    
    let holder = this.getLastSpaceOrNull(grid,topRow)
    wasVariablegridCheck = holder.leftSide
    wordAtEndOfRowOne = holder.rightSide
    
    let lengthOfRightWordAtRowOne = wordAtEndOfRowOne.length
    if(lengthOfRightWordAtRowOne >= 2){
      TwoOrMoreCharactersAtRightWordAtRowOne = true
    }

    
    //before first space or null, whichever is first
      
    //ON LAST LETTER LETTER HAS BEEN MOVED TO LAST LINE, UPPER LETTER IS STILL THERE
    //row before current row is raedy for pushing
    if (rowIndex != 0 && grid[rowIndex][WIDTH-1] != "-" &&
      
      rowIndex === HEIGHT - 1
      ){
        horizontalCursorPosition = 0;
        verticalCursorPosition = verticalCursorPosition + 10;
      this.lastLineWorkings(grid, rowIndex)
      //horizontalCursorPosition = 10
      return grid
      } 

      if(rowIndex > HEIGHT - 2){
        //this.lastLineWorkings(grid, rowIndex)
        //drawGrid(HEIGHT, WIDTH)
        //this.displayGridAndCursor()
         return grid
      }

      if(rowIndex > HEIGHT - 1){
        //this.lastLineWorkings(grid, rowIndex)
        //drawGrid(HEIGHT, WIDTH)
        //this.displayGridAndCursor()
         return grid
      }
    
    
    let firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
    let firstIndexOfSpaceOnBottomRow = bottomRow.indexOf(" ");
    
    //first index is set to last character of row
    if(firstIndexOfNullOnBottomRow === -1){
      firstIndexOfNullOnBottomRow = 27
    }

    if(firstIndexOfSpaceOnBottomRow === -1){
      firstIndexOfSpaceOnBottomRow = 27
    }
    let lastIndexOfFirstWord = 0
    //choose space or null character that is farthest right on row
    if(firstIndexOfSpaceOnBottomRow < firstIndexOfNullOnBottomRow){
    lastIndexOfFirstWord = firstIndexOfSpaceOnBottomRow 
    }else{
    lastIndexOfFirstWord = firstIndexOfNullOnBottomRow 
    }
    const [firstWordBottomRow, indexAfterLeftWordBottomRow] = this.splitAtIndex(bottomRow, lastIndexOfFirstWord);
    let lastIndexOffirstWordBottomRow = firstWordBottomRow.length
    let LengthOfNullsAndSpacesAfterFirstLeftMostCharacter = 0
    
    //Top row is last row
    
    ////!!!!!!!!!!!!!!!!!!!!!!!!!!
    ////get next dash or space after word on left - bottom row
    //for(let i = lastIndexOfFirstWord ; i < WIDTH; i++){
    // if (grid[rowIndex+2][i] != "-" &&  grid[rowIndex+2][i] != " "){
    //       break
    // }
    // LengthOfNullsAndSpacesBeforeLeftMostCharacter++
    //}


    //CHECK FOR DOUBLE CHARACTER ON LEFT, IS WRAPPING FROM RIGHT!

    
    //!!!!CHECK THESE VALUES : A
    for(let i = 1 ; i <WIDTH ; i++){
      //if (grid[rowIndex+2][i] != "-" &&  grid[rowIndex+2][i] != " ")
      if (grid[rowIndex+1][i] != "-" )
      {
            break
      }
      LengthOfNullsAndSpacesAfterFirstLeftMostCharacter++
     }
     //drawGrid(HEIGHT, WIDTH)
     
    
     //there are back to back characters on bottom row
     if(LengthOfNullsAndSpacesAfterFirstLeftMostCharacter === 0){
      //??????????
      this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
      return grid
     }
     //LengthOfNullsAndSpacesBeforeLeftMostCharacter = 9
    //will word fit below in the spaces and nulls that are before the next real character
    if(lengthOfRightWordAtRowOne < LengthOfNullsAndSpacesAfterFirstLeftMostCharacter && 
      //!!!!!!
      lengthOfRightWordAtRowOne > 0){
      //CHECK SITUATION IN PUSHROWRIGHT - DON'T PUSH

      let combined = []

      //add extra character from insert
      for(let i = 1; i<lengthOfRightWordAtRowOne+1 ; i++ ){
        //grid[rowIndex+1][i] = topRow[WIDTH-i]
      }
      
    ///////////////////////////////////////////

    //characters will be moved from top to bottom, the final right side has empty
    //elements that are not assigned yer
    
    //!!!!!NO LEFT CHARACTERS AFTER LEFT WORD
     const [removeThis, charactersAfterLeftWordOnBottomRow] = this.splitAtIndex(indexAfterLeftWordBottomRow, lengthOfRightWordAtRowOne );
    //put row together
    combined = [...wordAtEndOfRowOne, ...firstWordBottomRow, ...charactersAfterLeftWordOnBottomRow]
    
    let lengthOfFirstWordBottomRow = firstWordBottomRow.length
    //get remainder for next recursive call - this is one rows worth
    const [newBottomRow, newRemainder] = this.splitAtIndex(combined, WIDTH);
    ////drawGrid(HEIGHT, WIDTH)
    //assign row


    //if either row above or present has a dash, don't change the grid
    if((verticalCursorPosition/10 > 0) && (grid[rowIndex-1][WIDTH-1] === "-"  ) || (grid[rowIndex][0]) === "-") { //|| !(firstWordBottomRow)){

       this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
       return grid

     }

    grid[rowIndex] = newBottomRow
    //cover up blank space on upper row, caused by insert that causes wrapping push
    if(rowIndex > 0){
      //grid[rowIndex-1][WIDTH-1] = "-"
    }
    
    //drawGrid(HEIGHT, WIDTH)




    //check length of word, move cursor (one two character presses), check left problems
  
  
  //!!!!!CHECK THIS, NO RIGHT WORD: A

  

  if(lengthOfRightWordAtRowOne == 0){
  }else{
  //fill in moved text space with dashes on top row
  for(let i =  WIDTH - lengthOfRightWordAtRowOne ; i < WIDTH ; i++){
    grid[rowIndex-1][i] = '-'
  }
  }

  if(lengthOfRightWordAtRowOne > LengthOfNullsAndSpacesAfterFirstLeftMostCharacter && lengthOfRightWordAtRowOne != 0 && lengthOfRightWordAtRowOne!= -1){

    horizontalCursorPosition = 10
  }

  if( TwoOrMoreCharactersAtRightWordAtRowOne ){
  horizontalCursorPosition = 0
  horizontalCursorPosition = horizontalCursorPosition = ((lengthOfRightWordAtRowOne + 1) * 5)
  verticalCursorPosition = verticalCursorPosition + 10
  }else{
    //????
    //horizontalCursorPosition = horizontalCursorPosition + 10
  }
  TwoOrMoreCharactersAtRightWordAtRowOne = false;
  this.pushWordsDoThisSecond(grid, newRemainder, rowIndex+1, false)

return grid  
}//ends fits in left hand slot

//doesn't fit in slot
else{
  //the right hand word is bigger than the available space
  if(this.characterMovedToBottom){
    horizontalCursorPosition = 5
    //verticalCursorPosition = verticalCursorPosition + 10

  }
  this.characterMovedToBottom = ""
  //drawGrid(HEIGHT, WIDTH)
  //this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
}
  //drawGrid(HEIGHT, WIDTH) 
  this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
  return grid
}




fillNullWithDashOnRow(RowIndex, arrayToChange) {
for (let i = 0; i < WIDTH; i++) {
  if (
    arrayToChange[RowIndex][i] == "" ||
    arrayToChange[RowIndex][i] == " " ||
    typeof arrayToChange[RowIndex][i] == "undefined"
  ) {
    arrayToChange[RowIndex][i] = "-";
  }
}
return arrayToChange;
}
  
  splitAtIndex(arr, index) {
    console.log("index: ", index);
    console.log("arr: ", arr);
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return [front, back];
  }

//takes care of starting row, puts row after cursor on next row, and fill remaining spaces with dashes
divideFirstRowAsNeeded(grid, colIndex, rowIndex){
let topRow = grid[rowIndex]
let [leftTopRow, rightTopRow] = this.splitAtIndex(
    topRow,
    colIndex
);
grid[rowIndex] = leftTopRow
grid[rowIndex+1] = rightTopRow
//make all dashes
let leftTopRowLength = leftTopRow.length
if(leftTopRowLength === 0){
 grid[rowIndex] =  [DASH, DASH , DASH, DASH, DASH, DASH, DASH , DASH, DASH, DASH, DASH, DASH, DASH, DASH , DASH, DASH, DASH, DASH, DASH, DASH, DASH , DASH,DASH, DASH, DASH, DASH, DASH, DASH , DASH ]
   
}else{
  for(let i = leftTopRowLength; i < WIDTH; i++){
    grid[rowIndex][i] = '-'
 }
  for(let i = WIDTH - leftTopRowLength ; i < WIDTH; i++){
    grid[rowIndex+1][i] = '-'
  }
}
return grid
}

  //just copy from above to below check for this case to do last row 
  copyTopColumnToBottomColumn(counter, grid, colIndex, rowIndex){
   if(counter === rowIndex){
      this.divideFirstRowAsNeeded(grid, colIndex, rowIndex)
      return grid
    }
    let stringOfGrid = grid[counter]
    grid[counter+1] = stringOfGrid
   drawGrid(HEIGHT, WIDTH)
   this.copyTopColumnToBottomColumn(counter-1, grid, colIndex, rowIndex)
   return grid
  }

  //TESTED: 11/20/24
  //looked over, could check 1 variable, 2 variable, 3 variable; on each line.  Because, I understood the 
  //simple code, I just checked each row with three characters, first, middle, last.  Checked 5 tests for each row below.
  //first line (4) :  *
  //mid line (4) :    *    
  //last line (4) :   *
  
  pressedEnter(
    grid,
    rowIndex,
    colIndex,
    remainder,
    IsFirstTime,
    counter
    ) {
      this.createRow(grid, rowIndex)
      this.copyTopColumnToBottomColumn(counter, grid, colIndex, rowIndex)
    //set for cursor on next line, first column
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    return grid;
  }
  
  //11/22/24
  // top row:    *
  // middle row: *
  // last row:   *
  
  deleteAndPullCharacters(remainder, rowIndex, columnIndex,  grid) {
    //On last row
    if(rowIndex > HEIGHT - 2){
    let topRow = grid[rowIndex]
    let combine = []

  
    if(columnIndex == -1){
    let [topRowLeftCharacter, topRowRightSide] = this.splitAtIndex(topRow, 1) ;
    combine = topRowRightSide
    
  
  }else{
      let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(topRow, columnIndex + 1) ;
      let [leftCharacterRightRow, topRowRightOfColumnWithoutFirstCharacter] = this.splitAtIndex(topRowRightOfColumn, 1) ;
    combine = [...topRowLeftOfColumn, ...topRowRightOfColumnWithoutFirstCharacter]
    }


    grid[rowIndex] = combine
    grid[rowIndex][WIDTH-1] = "-"
    
      drawGrid(HEIGHT, WIDTH)
      return grid
    }

    if (rowIndex > HEIGHT-3){
      let topRow = grid[rowIndex]
      let bottomRow = grid[rowIndex+1]
      let combine = []
      let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(topRow, columnIndex) ;
      let [leftCharacterRightRow, topRowRightOfColumnWithoutFirstCharacter] = this.splitAtIndex(topRowRightOfColumn, 1) ;
      combine = [...topRowLeftOfColumn, ...topRowRightOfColumnWithoutFirstCharacter]
      grid[rowIndex] = combine
      grid[rowIndex][WIDTH-1] = grid[rowIndex+1][0]
      let [bottomRowLeftCharacter, bottomRowRightSide] = this.splitAtIndex(bottomRow, 1) ;
      grid[rowIndex+1] = bottomRowRightSide
      grid[rowIndex+1][WIDTH-1] = "-"
      drawGrid(HEIGHT, WIDTH)
      return grid
    }
    let counterOfUsedRows = 0
    let rowIndexInLoop = rowIndex
    let topRow = grid[rowIndex]
    counterOfUsedRows = 0
    //determine how many rows of code with non null right side
    while(true){
      //now on last row so leave
      if(rowIndexInLoop == HEIGHT){
        break
      }
      if(grid[rowIndexInLoop][WIDTH-1] != "-")
      {
        //counts rows, and incrememtns row index
        rowIndexInLoop++
        counterOfUsedRows++
      }
      else{
        break
      }
    }
   //row under top row
  let middleRow = grid[rowIndex+1]
  let bottomRow = grid[rowIndex+2]
  let bottomRowLeftmostCharacter = bottomRow[0]
  //take left most character from top row
  let [frontCharactersTopRow, topWithoutFrontCharacters] = this.splitAtIndex(topRow, columnIndex + 1) ;
  //remove characters from right hand side
  let [left, topRightWithoutDeletedCharacter] = this.splitAtIndex(topWithoutFrontCharacters, 1) ;
  //get character on next (bottom) row, first column
  let [bottomLeftmostCharacter, bottomWholeRowExceptFinalRow] = this.splitAtIndex(middleRow, 1) ;
  //creates top row using first character from next row
  let combine = [...frontCharactersTopRow, ...topRightWithoutDeletedCharacter, ...bottomLeftmostCharacter ]
  grid[rowIndex] = combine
  grid[rowIndex+1] = [...bottomWholeRowExceptFinalRow, ...bottomRowLeftmostCharacter]
  
  this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex+1, columnIndex, grid)
  //CursorMovements.cursorLeft()
  return grid
  }


  removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex, columnIndex, grid){
    
    //counter is used to check for proper amount of lines to be run
    this.counterOfRows++
    if (rowIndex === HEIGHT-2){
      let bottomRow = grid[rowIndex+1]
      let [bottomRowLeftCharacter, bottomRowRightSide] = this.splitAtIndex(bottomRow, 1) ;
      grid[rowIndex+1] = bottomRowRightSide
      grid[rowIndex+1][WIDTH-1] = "-"
      drawGrid(HEIGHT, WIDTH)
      return grid
    }
    let topRow = grid[rowIndex+1]
    //row after top row
    let botttomRow = grid[rowIndex+2]
    //get left most characeter, on bottomrow. Is put on most right side of row above it, top row.
    drawGrid(HEIGHT, WIDTH)
    let leftCharacterofBottomRow = botttomRow[0]
    //on final row and was a deletion so append a null character to end
    if(rowIndex == HEIGHT-1){
      leftCharacterofBottomRow = "-"
    }
    //get top row without lelft most character
    //let [topLeftmostCharacter, topRowWithoutLeftCharacter] = this.splitAtIndex(topRow, WIDTH-2) ;
    let [topRowWithoutLeftCharacter, topRightMostCharacters] = this.splitAtIndex(topRow, 1) ;
   //recreate the top with the next row's left character, if last row replace last character with null.
    const [BottomRowLeftCharacter, BottomRowWithoutLeftCharacter] = this.splitAtIndex(botttomRow, 1)
    let newTopRow = [...topRightMostCharacters, ...leftCharacterofBottomRow]
    grid[rowIndex+1] = newTopRow
    
    //tail end recursion, runs until end of rows, or dash is encountered after number of rows
    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex+1, columnIndex,  grid)
    //rest this global value, for use next time
    this.counterOfRows = 0
    return grid
 }

  displayGridAndCursor(){
  ////drawGrid(HEIGHT, WIDTH)
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET)
    //drawGrid(HEIGHT, WIDTH)
  }




  //?
  //change cursor position to next row if not on last row and column
  advanceHorizontalOneTime(){
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


  //TESTING : 11/19/24: For debugging, right hand side values move to first left.  All othher values move one to right.
  //if right hand value is empty, insert stops at that line.

  //sporadic testing, see above.  More complicated arrangements.
  //FIRST LINE
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *       
  //row 2:
  //one character:     *
  //two: characters:   *
  //three: characters: *    
  //row3 
  //one character:     *
  //two: characters:   *
  //three: characters: *    

  //MIDDLE LINES
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *       
  //row2 
  //one character:     *
  //two: characters:   *
  //three: characters: *    
  //with row3 
  //one character:     *
  //two: characters:   *
  //three: characters: *
       

  //LAST LINES
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *     
  //row2
  //one character:     *
  //two: characters:   *   
  //three: characters: *   
  //row3 
  //one character:     !
  //two: characters:   !
  //three: characters: ! 
  //
       

      //!!!!CONSIDER PROBABLY CODE DOWN BELOW
      initialInsertDoThisFirst(rowIndex, colIndex, grid, leftOverChar){
      //checks if dash at end of current row, used for prevention of continuation on other rows
      let IsADash = false
       //just on first top statement
       if(grid[rowIndex][WIDTH-1] === "-"){
        IsADash = true 
        }
      //for displaying
      let horizString =  (horizontalCursorPosition/5).toString()
      let vertString = (verticalCursorPosition/10).toString() 
      //let a = document.getElementById("xAndY")
      //a.innerHTML = 'Horizontal' + horizString + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + 'Vertical: '+ vertString
      this.checkOnLastLineSoCreateRow = true;
      //from row now to end of each row, check for dash throug ending row
      //if dash, than each line will not be pushed dow
      for(let i = verticalCursorPosition/10; i < HEIGHT; i++){
        if (grid[i][WIDTH-1] === "-"){
        this.checkOnLastLineSoCreateRow = false;
        break
        }
      }
      if(  this.checkOnLastLineSoCreateRow === true){
        
        this.createRow(grid, leftOverChar, rowIndex, colIndex)
        
      }
      if(rowIndex > HEIGHT -1){
        return grid
      }
      //these are the two lines we are using
      let topRow = grid[rowIndex];
      let lowerRow = grid[rowIndex+1]
      //splits array apart at insertion point
      
     // colIndex = colIndex + 1;
     
      CursorMovements.cursorRight()

      let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, (colIndex))


      //insert character at index
      let combineTopRow = [...leftTopRow, ...leftOverChar, ...rightTopRow]
      //this is one row, exactly, because of WIDTH
      


     
      //CursorMovements.cursorRight()
      
      let [finishedTopRow, leftOver] = this.splitAtIndex(combineTopRow, WIDTH)
      //there is a character on last row, do call function which is recursive
      //if (grid[rowIndex][WIDTH-1] != DASH)
        
        //push rows right because of insert
        grid[rowIndex] = finishedTopRow


        /////////////////////FOR pushWordsDoThisSecond

        //???LOOK AT THIS - checks character on left for cursor positioning???
        if(horizontalCursorPosition/5 === WIDTH-1){
          this.CursorOnLastColumn = true
        }
        
        //!!!!!Possibly incorporate this with pushWordsDoThisSecond setting a variable: lastRowIndexToPush; or maybe a function call here 
        //if(grid[rowIndex][WIDTH-1] === "-" && this.lastRowIndexToPushOn === -1 && rowIndex > horizontalCursorPosition/5){
        if(grid[rowIndex][WIDTH-1] === "-" || grid[rowIndex+1] === "-"){

        }else{

        } 
        // WAS DASH AT FIRST LINE OF INSERT'S END
       if (IsADash === true){ 
        return grid
       }

      
        this.pushRowRight(rowIndex+1, colIndex, grid, leftOver)
        //On zero, because there will be a cursorright
        
        //THIS PROBABLY SHOULD BE USED:
        //if(horizontalCursorPosition/5-1 === 0){
        //  //used for setting  cursor
        //  this.CursorOnLastColumn = true
        //}

        //CursorMovements.cursorRight()
        return grid    
    }



checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex){
   
  //!!!!THIS VARIABLE IS NOT DEFINED OR USED ELSEWHERE!!!!!
  if (grid[HEIGHT-1][WIDTH-1] != "-" && this.AfterCursorAllRowsHaveNoDash){//} && rowIndex == HEIGHT-1){
    this.createRow(grid, rowIndex)
  }
  return grid
}



//11/23/24 - looks good - SEE CHECK THIS
//stops inserting when last character is a dash!
pushRowRight(rowIndex, colIndex, grid, leftOverChar){

  //in pushword, in increase verticalcursorposition back 10
  
  //verticalCursorPosition = 0
  //horizontalCursorPosition = 0
  //verticalCursorPosition = verticalCursorPosition + 10
  //horizontalCursorPosition = horizontalCursorPosition+10
  if(rowIndex > HEIGHT -1){
    
    return grid
  }
  //two rows were using for push
  //let topRow = grid[(rowIndex-1)];
  let lowerRow = grid[rowIndex]
  let combineToBottomRow = []
  //if not a dash on last row end, than add that character on start of next line
  if (leftOverChar === "-"){
    combineToBottomRow = [...lowerRow]
  }else{
    combineToBottomRow = [...leftOverChar, ...lowerRow]
  }
  //one row, exactly, because of WIDTH, left over characters become remainder
  //for next call
  let [bottomRowReady, remainingChars] = this.splitAtIndex(combineToBottomRow, WIDTH)
  //let [left, remainingChars] = this.splitAtIndex(remainingChars, WIDTH)
  grid[rowIndex] = bottomRowReady
  if(grid[rowIndex][0] != "-"){
    this.characterMovedToBottom = grid[rowIndex][0] 
  }
  
  //!!!!!!!!!!CHECK THIS!!!!!!!!!!
  if(grid[rowIndex][WIDTH-1] === "-"){//} && remainingChars === "" || remainingChars == [""] ){
    return grid
  }
    drawGrid(HEIGHT, WIDTH)
    //push next row to right(one position)  recursion
    
    this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
    
    
    return grid
  }
}





