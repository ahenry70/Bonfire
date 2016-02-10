describe('findLongestWord', function(){
  it('Entered (The) -- Expect 3', function(){
    expect(findLongestWord("The")).toEqual(3);}
  );

  it('Entered (The quick) -- Expect 5', function(){
    expect(findLongestWord("The quick")).toEqual(5);}
  );

  it('Entered (The quicker browner fox) -- Expect 7', function(){
    expect(findLongestWord("The quick browner fox")).toEqual(7);}
  );

});
