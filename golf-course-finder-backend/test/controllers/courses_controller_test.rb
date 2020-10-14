require 'test_helper'

class CoursesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @course = courses(:one)
  end

  test "should get index" do
    get courses_url, as: :json
    assert_response :success
  end

  test "should create course" do
    assert_difference('Course.count') do
      post courses_url, params: { course: { address: @course.address, city: @course.city, club_name: @course.club_name, course_length: @course.course_length, image: @course.image, likes: @course.likes, number_of_holes: @course.number_of_holes, phone: @course.phone, state: @course.state, type: @course.type, website: @course.website, zip_code: @course.zip_code } }, as: :json
    end

    assert_response 201
  end

  test "should show course" do
    get course_url(@course), as: :json
    assert_response :success
  end

  test "should update course" do
    patch course_url(@course), params: { course: { address: @course.address, city: @course.city, club_name: @course.club_name, course_length: @course.course_length, image: @course.image, likes: @course.likes, number_of_holes: @course.number_of_holes, phone: @course.phone, state: @course.state, type: @course.type, website: @course.website, zip_code: @course.zip_code } }, as: :json
    assert_response 200
  end

  test "should destroy course" do
    assert_difference('Course.count', -1) do
      delete course_url(@course), as: :json
    end

    assert_response 204
  end
end
