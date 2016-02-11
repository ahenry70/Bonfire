describe('Truncate', function(){
  it('Entered ("a",0) -- Expect ("...")', function(){
    expect(Truncate("a",0)).toEqual("...");}
  );

  it('Entered ("ab",1) -- Expect ("a...")', function(){
    expect(Truncate("ab",1)).toEqual("a...");}
  );

  it('Entered ("ab",2) -- Expect ("ab...")', function(){
    expect(Truncate("ab",2)).toEqual("ab");}
  );

  it('Entered ("ab",3) -- Expect ("ab")', function(){
    expect(Truncate("ab",3)).toEqual("ab");}
  );

  it('Entered ("123456789",4) -- Expect ("1234")', function(){
    expect(Truncate("123456789",4)).toEqual("1...");}
  );

  it('Entered ("Absolutely Longer", 2) -- Expect ("Ab...")', function(){
    expect(Truncate("Absolutely Longer", 2)).toEqual("Ab...");}
  );

  it('Entered ("A-tisket a-tasket A green and yellow basket", 11) -- Expect ("A-tisket...")', function(){
    expect(Truncate("A-tisket a-tasket A green and yellow basket", 11)).toEqual("A-tisket...");}
  );



});
