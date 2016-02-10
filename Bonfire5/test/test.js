describe('titleCase', function(){
  it('Entered (The) -- Expected (The)', function(){
    expect(titleCase("The")).toEqual("The");}
  );

  it('Entered (t) -- Expected (T)', function(){
    expect(titleCase("t")).toEqual("T");}
  );

  it('Entered (THe) -- Expected (The)', function(){
    expect(titleCase("THe")).toEqual("The");}
  );

  it('Entered (THe dog) -- Expected (The Dog)', function(){
    expect(titleCase("THe dog")).toEqual("The Dog");}
  );

});
