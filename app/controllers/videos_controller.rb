class VideosController < ApplicationController
    #hook up backend to frontend 
    def index 
        videos = Video.all
        render json: videos
    end 
end
