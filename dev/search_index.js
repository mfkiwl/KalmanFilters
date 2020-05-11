var documenterSearchIndex = {"docs":
[{"location":"#Kalman-Filters-Documentation-1","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"","category":"section"},{"location":"#Unscented-Kalman-Filter-1","page":"Kalman Filters Documentation","title":"Unscented Kalman Filter","text":"","category":"section"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"UKFState","category":"page"},{"location":"#UnscentedKalmanFilter.UKFState","page":"Kalman Filters Documentation","title":"UnscentedKalmanFilter.UKFState","text":"UKFState(\n    ;dim_x::Int64, dim_z::Int64, σ_parameters::MerweScaled,\n    add_x::Function = default_add_x,\n    residual_x::Function = default_residual,\n    residual_z::Function = default_residual,\n    mean_x::Function = default_mean_f,\n    mean_z::Function = default_mean_f\n)\n\nState of the Unscented Kalman Filter.\n\nParameters\n\ndim_x::Int64: State dimension\ndim_z::Int64: Measurement dimension\nx::Array{Float64, 1}: State of the filter\nP::Array{Float64, 2}: Covariance matrix of the filter.\nK::Array{Float64, 2}: Kalman gain of the filter.\nS::Array{Float64, 2}: System uncertainty.\nS_inv::Array{Float64, 2}: Inverse of system uncertainty.\nσ_parameters::MerweScaled: Parameters for Van der Merwe sigma points.\nσ_fx::Array{Float64, 2}: Sigma points after fx.\nσ_hx::Array{Float64, 2}: Sigma points after hx.\nadd_x::Function: Function to calculate addition between two states.\nresidual_x::Function: Function to calculate residual between two states.\nresidual_z::Function: Function to calculate residual between state and measurement.\nmean_x::Function: Function to calculate mean between Σ-points and weights   after passing them through fx.\nmean_z::Function: Function to calculate mean between Σ-points and weights   after passing them through hx.\n\n\n\n\n\n","category":"type"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"predict!","category":"page"},{"location":"#UnscentedKalmanFilter.predict!","page":"Kalman Filters Documentation","title":"UnscentedKalmanFilter.predict!","text":"predict!(\n    ;ukf::UKFState, δt::Float64, Q::Union{Nothing, Array{Float64, 2}},\n    fx::Function, fx_args...\n)\n\nPerform prediction of the Unscented Kalman Filter (UKF). This updates x and P of the ukf to contain predicted state and covariance.\n\nArguments\n\nukf::UKFState: State of the UKF on which to perform prediction.\nδt::Float64: Time delta.\nQ::Union{Nothing, Array{Float64, 2}}: Process noise.\nfx::Function(;x::Array{Float64, 1}, δt::Float64, ...):   State transition function.   Should accept keyword-only arguments, with mandatory x and δt.   All other arguments may serve as control input or provide additional info.\nfx_args...: Arguments to pass to fx function.   Must contain at least x and δt arguments.\n\n\n\n\n\n","category":"function"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"update!","category":"page"},{"location":"#UnscentedKalmanFilter.update!","page":"Kalman Filters Documentation","title":"UnscentedKalmanFilter.update!","text":"update!(\n    ;ukf::UKFState, z::Array{Float64, 1}, R::Union{Nothing, Array{Float64, 2}},\n    hx::Function, hx_args...\n)\n\nPerform update step of the Unscented Kalman Filter (UKF) given measurements. This updates x and P of the ukf_state to contain updated state and covariance.\n\nArguments\n\nukf::UKFState: State of the UKF on which to perform update step.\nz::Array{Float64, 1}: Measurements.\nR::Union{Nothing, Array{Float64, 2}}: Measurement noise.\nhx::Function:   Measurement function.   Should accept keyword-only arguments with mandatory x argument for state.   Given state x of UKF it must transform it to the respective measurement.\nhx_args...: Arguments that will be passed to hx function.   Should contain at least x argument.\n\n\n\n\n\n","category":"function"},{"location":"#SigmaPoints-1","page":"Kalman Filters Documentation","title":"SigmaPoints","text":"","category":"section"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"MerweScaled","category":"page"},{"location":"#SigmaPoints.MerweScaled","page":"Kalman Filters Documentation","title":"SigmaPoints.MerweScaled","text":"MerweScaled(\n    ;n::Int64, α::Float64, β::Float64, κ::Float64, residual_x::Function = -\n)\n\nParameters for the Van der Merwe's σ-points\n\nn::Int64: Dimensionality of the state. 2n+1 will be generated\nα::Float64: Spread of the σ-points around the mean.\nβ::Float64: Prior knowledge of the distribution of the mean.\nκ::Float64: Second scaling parameter.\nΣ_w::Array{Float64, 1}: Weights for each σ-point for the covariance.\nm_w::Array{Float64, 1}: Weights for each σ-point for the mean.\nresidual_x::Function = -: Function to compute residual between states.\n\n\n\n\n\n","category":"type"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"calculate_σ_points","category":"page"},{"location":"#SigmaPoints.calculate_σ_points","page":"Kalman Filters Documentation","title":"SigmaPoints.calculate_σ_points","text":"calculate_σ_points(\n    ;σ_parameters::MerweScaled, x::Array{Float64, 1}, P::Array{Float64, 2}\n)::Array{Float64, 2}\n\nCompute 2n+1 x n Van der Merwe's σ-points for an Unscented Kalman Filter (UKF) given the mean x and covariance P.\n\nArguments\n\nσ_parameters::MerweScaled: Parameters of the Van der Merwe's σ-points.\nx::Array{Float64, 1}: Mean of the UKF.\nP::Array{Float64, 2}: Covariance of the x of the UKF.\n\n\n\n\n\n","category":"function"},{"location":"#","page":"Kalman Filters Documentation","title":"Kalman Filters Documentation","text":"num_σ_points","category":"page"},{"location":"#SigmaPoints.num_σ_points","page":"Kalman Filters Documentation","title":"SigmaPoints.num_σ_points","text":"num_σ_points(σ_parameters::MerweScaled)::Int64\n\nReturn number of σ-points for given σ-parameters.\n\n\n\n\n\n","category":"function"}]
}