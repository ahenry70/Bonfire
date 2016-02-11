
  describe('chunk', function(){

      it('Entered ([1], 1) -- Expect ([1])', function(){
      expect(chunk([1], 1)).toEqual([1]);}
    );

    it('Entered ([1,2], 1) -- Expect ([[1],[2]])', function(){
    expect(chunk([1,2], 1)).toEqual([[1],[2]]);}
  );

  it('Entered ([1,2,3], 1) -- Expect ([[1],[2],[3]])', function(){
  expect(chunk([1,2,3], 1)).toEqual([[1],[2],[3]]);}
);

it('Entered ([1,2,3], 2) -- Expect ([[1,2],[3]])', function(){
expect(chunk([1,2,3], 2)).toEqual([[1,2],[3]]);}
);

});
