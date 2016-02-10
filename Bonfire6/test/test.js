describe('endTest', function(){

  it('Entered ("n", "n") -- Expect (true)', function(){
    expect(endTest("n", "n")).toBe(true);
  });

  it('Entered ("an", "n") -- Expect (true)', function(){
    expect(endTest("an", "n")).toBe(true);
  });

  it('Entered ("an", "n") -- Expect (false)', function(){
    expect(endTest("an", "g")).toBe(false);
  });

  it('Entered ("dan", "an") -- Expect (true)', function(){
    expect(endTest("dan", "an")).toBe(true);
  });

  it('Entered ("Bastian", "n") -- Expect (true)', function(){
    expect(endTest("Bastian", "n")).toBe(true);
  });

});
